import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Introduction from "../components/Introduction"
import Projects from "../components/Projects"

import { Container } from "./styles"

const App = () => {
	return (
		<Container>
			<Header />

			<Introduction />
			<Projects />

			<Footer />
		</Container>
	)
}

export default App
