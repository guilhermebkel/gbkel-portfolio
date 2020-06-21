import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Screen from "../../components/Screen"
import WiredInfo from "../../components/WiredInfo"
import Divider from "../../components/Divider"

import { ExternalLink } from "../../styles"

import { Architecture, Container, DescriptionContainer, Text, ArchitectureContainer } from "./styles"

import architecture from "../../assets/architecture.png"

const About = () => {
	return (
		<Screen color="primary">
			<WiredInfo
				info="about"
				position="top"
			/>
			<Container>
        <DescriptionContainer>
          <Text>
            <strong>"Make it scalable."</strong>
            <Divider size="large" />My portfolio is part of an ecosystem of personal services I've made{" "}
						in order to get my life easier with use of automation and cloud computing. 
          </Text>

          <Divider size="large" />

          <ExternalLink href="https://about.guilherr.me/projects" target="_blank">
            <FontAwesomeIcon icon="info-circle" size="sm" /> read more about it
					</ExternalLink>
        </DescriptionContainer>

				<ArchitectureContainer>
					<Architecture src={architecture} />
				</ArchitectureContainer>
      </Container>
			<WiredInfo
				position="bottom"
			/>
		</Screen>
	)
}

export default About
