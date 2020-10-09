import React from "react"
import Head from "next/head"

const DefaultLayout: React.FC = (props) => {
	const { children } = props

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<link id="app-manifest" rel="manifest" href="/manifest.json"></link>
				<meta property="og:image" content="/favicon.png" />
			</Head>
			{children}
		</>
	)
}

export default DefaultLayout
