import React from "react"
import PropTypes from "prop-types"

import { Container } from "./styles"

const Screen = (props) => {
	const { color, children, flexDirection } = props

	return (
		<Container color={color} flexDirection={flexDirection}>
			{children}
		</Container>
	)
}

Screen.defaultProps = {
	flexDirection: "column"
}

Screen.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	flexDirection: PropTypes.string
}

export default Screen