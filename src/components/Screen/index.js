import React from "react"
import PropTypes from "prop-types"

import { Container } from "./styles"

const Screen = (props) => {
	const { color, children } = props

	return (
		<Container color={color}>
			{children}
		</Container>
	)
}

Screen.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default Screen