import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Container, Logo } from "./styles"

import logoWhite from "../../assets/logos/white.png"

const Header = () => {
  const reloadPage = () => {
    window.location = window.origin
  }

  return (
    <Container>
      <Logo src={logoWhite} onClick={() => reloadPage()} />
      {/* <FontAwesomeIcon icon="bars" color="#FFF" size="lg" /> */}
    </Container>
  )
}

export default Header
