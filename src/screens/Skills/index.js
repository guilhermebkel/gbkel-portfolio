import React, { useState, useEffect } from "react"
import { Button } from "antd"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"
import Divider from "../../components/Divider"

import { Text, GlobeContainer, DescriptionContainer, Container } from "./styles"

import SkillsGlobe from "./SkillsGlobe"

const Skills = () => {
  const skills = [
    "node.js",
    "react.js",
    "aws",
    "mongodb",
    "postgres",
    "redis",
    "typescript",
    "redux.js",
    "gatsby.js",
    "express.js",
    "adonis.js",
    "git",
    "mocha",
    "jest",
    "react native",
    "kafka",
    "serverless",
    "docker",
    "travis",
    "socket",
  ]

  const getResponsiveSize = width => {
		if (width <= 1200) {
      return 400
		} else if (width <= 1366) {
      return 500
		} else {
      return 600
    }
  }

  const [globeSize, setGlobeSize] = useState(
    getResponsiveSize(window.innerWidth)
  )

  const onResize = ({ target }) => {
    setGlobeSize(getResponsiveSize(target.screen.width))
  }

  const handleOpenSkillsPage = () => {
    window.open(
      "https://github.com/guilhermebkel/life-long-road/blob/master/skills.md",
      "_blank"
    )
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
  }, [])

  return (
    <Screen color="secondary">
      <WiredInfo
				info="skills"
				position="top"
			/>

      <Container>
        <DescriptionContainer>
          <Text>
            <strong>"Keep moving, always improving."</strong>
            <Divider size="large" />I have worked with{" "}
            <b>full-stack projects</b>, building applications from the back-end
            to the front-end, what helped me improving skills that revolve
            around <b>software architecture</b>, <b>cloud computing</b>,
            <b> programming logic</b> and <b>interface design</b>.
          </Text>

          <Divider size="large" />

          <Button type="primary" onClick={() => handleOpenSkillsPage()}>
            See more skills
          </Button>
        </DescriptionContainer>

				<GlobeContainer>
					<SkillsGlobe
						skills={skills}
						height={globeSize}
						width={globeSize}
						textColour="#FFF"
						textHeight={17}
					/>
				</GlobeContainer>
      </Container>

			<WiredInfo
				info=""
				position="bottom"
			/>
    </Screen>
  )
}

export default Skills
