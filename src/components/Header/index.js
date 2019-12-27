import React from "react"
import SlideEffect from "react-reveal/Slide"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Container, Logo } from "./styles"

import logoWhite from "../../assets/logos/white.png"

const Header = () => {
	const reloadPage = () => {
		window.location = window.origin
	}

	return (
		<Container>
			<SlideEffect bottom>
				<Logo src={logoWhite} onClick={() => reloadPage()} />
			</SlideEffect>
			{/* <FontAwesomeIcon icon="bars" color="#FFF" size="lg" /> */}
		</Container>
	)
}

export default Header
