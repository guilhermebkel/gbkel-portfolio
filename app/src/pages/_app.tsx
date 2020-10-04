import React from "react"
import { AppProps } from "next/app"

import DefaultLayout from "@/layouts/Default"

import "@/styles/global.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	)
}

export default App
