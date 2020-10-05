import React from "react"
import { AppProps } from "next/app"
import { NextPage } from "next"

import DefaultLayout from "@/layouts/Default"

import "@/styles/global.css"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	)
}

export default App
