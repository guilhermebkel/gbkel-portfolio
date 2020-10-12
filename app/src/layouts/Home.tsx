import React from "react"
import Head from "next/head"

import {
	HomeContainer,
	SiriWave
} from "@/styles/Home"

const HomeLayout: React.FC = (props) => {
	const { children } = props

	return (
		<HomeContainer>
			<Head>
				<title>Guilherme Mota</title>
			</Head>

			{children}

			<SiriWave id="wave" />

			<script src="/js/siriwave.js"></script>
		</HomeContainer>
	)
}

export default HomeLayout
