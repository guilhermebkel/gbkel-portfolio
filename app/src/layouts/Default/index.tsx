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
				<link rel="icon" href="/favicon.png" />
				<link id="app-manifest" rel="manifest" href="/manifest.json"></link>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
				<meta property="og:image" content="/favicon.png" />
			</Head>

			<Navbar />

			{children}
		</>
	)
}

export default DefaultLayout
