import React from "react"
import Head from "next/head"

const DefaultLayout: React.FC = (props) => {
	const { children } = props

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta property="og:image" content="/favicon.png" />
			</Head>
			{children}
		</>
	)
}

export default DefaultLayout
