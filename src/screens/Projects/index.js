import React from "react"
import { Carousel } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { 
	Screen, 
	Project, 
	Column, 
	Title, 
	Description, 
	Mockup, 
	ExternalLink,
	SelectorGroup,
	Selector,
	TitleGroup,
	ProjectIndex,
	Content
} from "./styles"

import Divider from "../../components/Divider"
import WiredInfo from "../../components/WiredInfo"

const Projects = () => {
	let next
	let previous

	const getCarouselRef = (ref) => {
		if (ref) {
			next = ref.slick.slickNext
			previous = ref.slick.slickPrev
		}
	}

	const data = useStaticQuery(graphql`
		query {
			gbkel {
				projects {
					title
					technologies
					description
					live_url
					image_url
					github_url
					active
				}
			}
		}
	`)

	return (
		<Screen color="primary">
			<WiredInfo 
				info="projects"
				position="top"
			/>
			<Carousel 
				autoplay={true}
				ref={getCarouselRef} 
				dots={false} 
				accessibility={true} 
				lazyLoad="progressive"
				speed={400}
				pauseOnFocus={true}
			>
				{
					data.gbkel.projects
						.filter(project => project.active)
						.map((project, index) => (
								<Content>					
									<Project>
										<Column width="500px" order="2">
											<Mockup image={project.image_url} />

											<SelectorGroup>
												<Selector onClick={() => previous()}>
													<FontAwesomeIcon icon="long-arrow-alt-left" /> <span>previous</span>
												</Selector>

												<Selector onClick={() => next()}>
													<span>next</span> <FontAwesomeIcon icon="long-arrow-alt-right" />
												</Selector>
											</SelectorGroup>
										</Column>

										<Column width="50%" order="1">
											<TitleGroup>
												<ProjectIndex>
													0{index + 1}
												</ProjectIndex>

												<Title>
													{project.title}
												</Title>
											</TitleGroup>
											
											<Divider size="large" />

											<Description>
												{project.description}
											</Description>

											<Divider size="large" />

											<ExternalLink href={project.github_url} target="_blank">
												<FontAwesomeIcon icon={["fab", "github"]} size="sm" /> view code on github
											</ExternalLink>

											<Divider size="small" />

											<ExternalLink href={project.live_url} target="_blank">
												<FontAwesomeIcon icon={["fab", "chrome"]} size="sm" /> view project on live
											</ExternalLink>
										</Column>
									</Project>
								</Content>
						))
				}
			</Carousel>
			<WiredInfo 
				info=""
				position="bottom"
			/>
		</Screen>
	)
}

export default Projects
