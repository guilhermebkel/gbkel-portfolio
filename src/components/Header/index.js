import React from "react"
import RotateEffect from "react-reveal/Rotate"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Container, Logo } from "./styles"

import logoWhite from "../../assets/logos/white.png"

const Header = () => {
	const reloadPage = () => {
		window.location = window.origin
	}

	return (
		<Container>
			<RotateEffect>
				<Logo src={logoWhite} onClick={() => reloadPage()} />
			</RotateEffect>
			{/* <FontAwesomeIcon icon="bars" color="#FFF" size="lg" /> */}
		</Container>
	)
}

export default Header
