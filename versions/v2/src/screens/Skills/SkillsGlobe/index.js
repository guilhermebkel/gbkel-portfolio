import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { Container, SkillsList } from "./styles"

const SkillsGlobe = (props) => {
	const {
		skills,
		width,
		height,
		dragControl,
		noMouse,
		textColour,
		textHeight
	} = props

	useEffect(() => {
		window.TagCanvas.Start("skills-globe", "", {
			dragControl,
			noMouse,
			textColour,
			textHeight,
			initial: [0.2, -0.2]
		})
	})

	return (
		<Container id="skills-globe" width={width} height={height}>
			<SkillsList>
				{
					skills.map(skill => {
						return (
							<li>
								<a href={`#${skill}`}>{skill}</a>
							</li>
						)
					})
				}
			</SkillsList>
		</Container>
	)
}

SkillsGlobe.defaultProps = {
	noMouse: true,
	dragControl: true
}

SkillsGlobe.propTypes = {
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	dragControl: PropTypes.bool,
	noMouse: PropTypes.bool,
	textColour: PropTypes.string,
	textHeight: PropTypes.number
}

export default SkillsGlobe