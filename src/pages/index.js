import React, { useEffect } from "react"
import { Carousel } from "antd"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Introduction from "../screens/Introduction"
import Projects from "../screens/Projects"
import Skills from "../screens/Skills"
import Contact from "../screens/Contact"

import { Container } from "./styles"

const App = () => {
	let next
	let previous

	const getCarouselRef = (ref) => {
		if (ref) {
			next = ref.slick.slickNext
			previous = ref.slick.slickPrev
		}
	}

	const onWheel = ({ deltaY }) => {
		if (deltaY > 0) {
			next()
		} else if (deltaY < 0) {
			previous()
		} else {
			return
		}
	}

	const onKeyPress = ({ key }) => {
		if (key === "ArrowDown") {
			next()
		} else if (key === "ArrowUp") {
			previous()
		} else {
			return
		}
	}

	useEffect(() => {
		window.addEventListener("wheel", onWheel)
		window.addEventListener("keydown", onKeyPress)
	})

	return (
		<Container>
			<Header />

			<Carousel 
				dotPosition="right" 
				ref={getCarouselRef} 
				accessibility={false} 
				verticalSwiping={true}
				speed={400}
				infinite={false}
			>
				<Introduction />
				<Projects />
				<Skills />
				<Contact />
			</Carousel>

			<Footer />
		</Container>
	)
}

export default App
