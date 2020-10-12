import React from "react"
import Head from "next/head"

const HomeLayout: React.FC = (props) => {
	const { children } = props

	return (
		<>
			<Head>
				<script src="/js/siriwave.js"></script>
			</Head>
			{children}
		</>
	)
}

export default HomeLayout
