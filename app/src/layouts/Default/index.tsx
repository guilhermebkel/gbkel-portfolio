import React from "react"
import Head from "next/head"
import GoogleFonts from "next-google-fonts"

import {
	Navbar
} from "@/components"

import { buildCDNUrl } from "@/lib/cdn"

const DefaultLayout: React.FC = (props) => {
	const { children } = props

	return (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" />

			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="google-adsense-account" content="ca-pub-8181695516957399" />
				<link rel="icon" href={buildCDNUrl("/favicon.png")} />
				<link id="app-manifest" rel="manifest" href="/manifest.json"></link>
				<script defer type="text/javascript" src="https://static.guilherr.me/js/gtm.js"></script>
			</Head>

			<Navbar />

			{children}
		</>
	)
}

export default DefaultLayout
