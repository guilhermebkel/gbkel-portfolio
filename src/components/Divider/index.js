import React from "react"
import PropTypes from "prop-types"

import { Container } from "./styles"

const Divider = (props) => {
	const { size } = props

	return (
		<Container size={size} />
	)
}

Divider.defaultProps = {
	size: "small"
}

Divider.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"])
}

export default Divider