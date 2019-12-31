import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title, Content, Description, Background } from "./styles"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"

import beachBlackBackground from "../../assets/backgrounds/beach_black.jpg"

// const [ beachBlackBackground ] = data.filter()

const Introduction = () => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
				edges {
					node {
						childImageSharp {
							fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	const getBackground = (name) => {
		const backgroundNodes = data.allFile.edges

		let background

		for (let i=0; i < backgroundNodes.length; i++) {
			if (backgroundNodes[i].node.childImageSharp.fluid.src.includes(name)) {
				background = backgroundNodes[i].node.childImageSharp.fluid
				break;
			}
		}

		return ["linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))", background]
	}

	return (
		<Screen color="secondary">
			<Background fluid={getBackground("beach_black")}>
				<Content>
					<Title>
						Hello, I'm <b>Guilherme Bromonschenkel</b>.
					</Title>
					<Description>
						A <b>software developer</b> passionate about programming, software architecture, complex systems and technologies in general. 
					</Description>
				</Content>
				<WiredInfo 
					info="scroll down to discover more"
					position="bottom"
				/>
			</Background>
		</Screen>
	)
}

export default Introduction
