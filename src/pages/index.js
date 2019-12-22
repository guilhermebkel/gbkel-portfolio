import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Introduction from "../components/Introduction"

import { Container } from "./styles"

const App = () => {
	return (
		<Container>
			<Introduction />

			<Header />
			<Footer />
		</Container>
	)
}

export default App
