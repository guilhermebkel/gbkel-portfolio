import React from "react"
import Head from "next/head"

import DefaultLayout from "@/layouts/Default"

const Home: React.FC = () => {
	return (
		<DefaultLayout>
			<Head>
				<title>Guilherme Mota</title>
			</Head>

			<h1>
				Coming soon...
			</h1>
		</DefaultLayout>
	)
}

export default Home
