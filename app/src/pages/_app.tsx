import React from "react"
import { AppProps } from "next/app"
import { NextPage } from "next"

import DefaultLayout from "@/_layouts/Default"

import GlobalStyles from "@/styles/Global"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<DefaultLayout>
			<GlobalStyles />

			<Component {...pageProps} />
		</DefaultLayout>
	)
}

export default App
