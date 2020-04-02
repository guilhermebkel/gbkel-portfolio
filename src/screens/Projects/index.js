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
	SelectorGroup,
	Selector,
	TitleGroup,
	ProjectIndex,
	Content,
	ExternalLinkContainer
} from "./styles"

import Divider from "../../components/Divider"
import WiredInfo from "../../components/WiredInfo"

import { ExternalLink } from "../../styles"

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
					mockup {
						childImageSharp {
							fluid(maxWidth: 600, quality: 100) {
								...GatsbyImageSharpFluid
							}
						}
					}
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
				lazyLoad="ondemand"
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
											<Mockup fluid={project.mockup.childImageSharp.fluid} />

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
													{
														index <= 10
														? `0${index + 1}`
														: index + 1
													}
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

											<ExternalLinkContainer>
												<ExternalLink href={project.github_url} target="_blank">
													<FontAwesomeIcon icon={["fab", "github"]} size="sm" /> view code on github
												</ExternalLink>
											</ExternalLinkContainer>

											<Divider size="small" />

											<ExternalLinkContainer>
												<ExternalLink href={project.live_url} target="_blank">
													<FontAwesomeIcon icon={["fab", "chrome"]} size="sm" /> view project on live
												</ExternalLink>
											</ExternalLinkContainer>
										</Column>
									</Project>
								</Content>
						))
				}
			</Carousel>
			<WiredInfo 
				position="bottom"
			/>
		</Screen>
	)
}

export default Projects
