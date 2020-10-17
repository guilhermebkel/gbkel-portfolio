import React from "react"
import Head from "next/head"

import {
	Navbar,
	// Loading
} from "@/components"

const DefaultLayout: React.FC = (props) => {
	const { children } = props

	return (
		<>
			{/* <Loading /> */}

			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="icon" href="/favicon.png" />
				<link id="app-manifest" rel="manifest" href="/manifest.json"></link>
				<link href="/css/font.css" rel="stylesheet"></link>
				<meta property="og:image" content="/favicon.png" />
				<meta name="description" content="All info about a problem solver called Guilherme Mota."/>
			</Head>

			<Navbar />

			{children}
		</>
	)
}

export default DefaultLayout
