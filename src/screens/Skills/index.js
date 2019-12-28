import React from "react"
import { Button } from "antd"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"
import Divider from "../../components/Divider"

import { Description, Col, DescriptionContainer } from "./styles"

import SkillsGlobe from './SkillsGlobe'

const Skills = () => {
	const skills = [
		"node.js", "react.js", "aws", "mongodb", "postgres", "redis", "typescript",
		"redux.js", "gatsby.js", "express.js", "adonis.js", "git", "mocha", "jest", "react native", 
		"kafka", "serverless", "docker", "travis", "socket"
	]

	const handleOpenSkillsPage = () => {
		window.open("https://github.com/guilhermebkel/life-long-road/blob/master/skills.md", "_blank")
	}

	return (
		<Screen color="secondary" flexDirection="row">
			<WiredInfo 
				info="skills"
				position="top"
			/>
			<Col width="30%">
				<DescriptionContainer>
					<Description>
						<strong>"Keep moving, always improving."</strong>

						<Divider size="large" />

						I have worked with <b>full-stack projects</b>, building applications from the back-end to the front-end,
						what helped me improving skills that revolve around <b>software architecture</b>, <b>cloud computing</b>,
						<b> programming logic</b> and <b>interface design</b>.
					</Description>

					<Divider size="large" />

					<Button
						type="primary"
						onClick={() => handleOpenSkillsPage()}
					>
						See more skills
					</Button>
				</DescriptionContainer>
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