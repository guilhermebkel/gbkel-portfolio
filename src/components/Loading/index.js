import React from "react"
import PropTypes from "prop-types"

import { Container, AnimatedLogo } from "./styles"

import animatedLogo from "../../assets/animated/logo.svg"

const Loading = (props) => {
	const { loading } = props
	
	return (
		<Container loading={loading}>
			<AnimatedLogo type="image/svg+xml" data={animatedLogo} />
		</Container>
	)
}

Loading.propTypes = {
	loading: PropTypes.bool.isRequired
}

export default Loading