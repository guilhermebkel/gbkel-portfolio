import React from "react"
import Head from "next/head"

import {
	Navbar
} from "@/components"

import { buildCDNUrl } from "@/lib/cdn"

import useDidMount from "@/hooks/useDidMount"

const DefaultLayout: React.FC = (props) => {
	const { children } = props

	useDidMount(() => {
		window.addEventListener("load", () => {
			const href = buildCDNUrl("/css/font.css")

			const font = document.createElement("link") 
			font.setAttribute("rel", "stylesheet")
			font.setAttribute("href", href)

			document.head.appendChild(font)
		})
	})

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="icon" href={buildCDNUrl("/favicon.png")} />
				<link id="app-manifest" rel="manifest" href="/manifest.json"></link>
				<meta property="og:image" content={buildCDNUrl("/favicon.png")} />
				<meta name="description" content="All info about a problem solver called Guilherme Mota."/>
			</Head>

			<Navbar />

			{children}
		</>
	)
}

export default DefaultLayout
