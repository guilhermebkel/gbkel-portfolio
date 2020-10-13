import React from "react"
import Head from "next/head"

import {
	HomeContainer,
	SiriWave
} from "@/layouts/Home/styles"

import { setupSiriWave } from "@/lib/external"

import useDidMount from "@/hooks/useDidMount"

const HomeLayout: React.FC = (props) => {
	const { children } = props

	useDidMount(() => {
		window.addEventListener("load", () => {
			setupSiriWave({
				container: document.getElementById("wave"),
				speed: 0.02,
				color: "#FFFFFF",
				frequency: 4,
				autostart: true,
				amplitude: 1
			})
		})
	})

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
