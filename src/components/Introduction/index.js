import React from "react"
import Particles from "react-particles-js"

import { Container, Title, Content, Description } from "./styles"

const Introduction = () => {
	return (
		<Container>
			<Particles 
				params={{
					"particles": {
							"number": {
									"value": 200,
									"density": {
											"enable": true,
											"value_area": 1000
									}
							},
							"line_linked": {
									"enable": true,
									"opacity": 0.05
							},
							"size": {
									"value": 1
							},
							"opacity": {
									"anim": {
											"enable": true,
											"speed": 1,
											"opacity_min": 0.05
									}
							}
					},
					"interactivity": {
							"events": {
									"onclick": {
											"enable": true,
											"mode": "push"
									}
							},
							"modes": {
									"push": {
											"particles_nb": 1
									}
							}
					},
					"retina_detect": true
			}}
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
