import React from "react"

import { Container, Menu, Logo } from "./styles"

import logoWhite from "../../assets/logos/white.png"

const Header = () => {
	return (
		<Container>
			<Logo src={logoWhite} />
			<Menu />
		</Container>
	)
}

export default Header
