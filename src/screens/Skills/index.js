import React from "react"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"

import { Description, Col } from "./styles"

import SkillsGlobe from './SkillsGlobe'

const Skills = () => {
	const skills = [
		"node.js", "react.js", "aws", "mongodb", "postgres", "redis", "typescript",
		"redux.js", "gatsby.js", "express.js", "adonis.js", "git", "mocha", "jest", "react native", 
		"kafka", "serverless", "docker", "travis", "socket"
	]

	return (
		<Screen color="secondary" flexDirection="row">
			<WiredInfo 
				info="skills"
				position="top"
			/>
			<Col width="30%">
				<Description>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Description>
			</Col>

			<Col width="30%" disableOnMobile={true}>
				<SkillsGlobe
					skills={skills}
					height={600}
					width={600}
					textColour="#FFF"
					textHeight={17}
				/>
			</Col>
			<WiredInfo 
				info=""
				position="bottom"
			/>
		</Screen>
	)
}

export default Skills