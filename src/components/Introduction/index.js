import React from "react"
import Particles from "react-particles-js"

import { Container, Title, Content, Description } from "./styles"

const Introduction = () => {
	return (
		<Container>
			<Particles 
				width="100vw"
				height="100vh"
			/>
			<Content>
				<Title>
					Hello, I'm <b>Guilherme Bromonschenkel</b>.
				</Title>
				<Description>
					A <b>software developer</b> passionate about programming, software architecture, complex systems and technologies in general. 
				</Description>
			</Content>
		</Container>
	)
}

export default Introduction
