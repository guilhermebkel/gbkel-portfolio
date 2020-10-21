import React from "react"
import { AppProps, NextWebVitalsMetric } from "next/app"
import { NextPage } from "next"

import DefaultLayout from "@/layouts/Default"

import GlobalStyles from "@/styles/Global"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<DefaultLayout>
			<GlobalStyles />

			<Component {...pageProps} />
		</DefaultLayout>
	)
}

export const reportWebVitals = (metric: NextWebVitalsMetric): void  => {
	window["metrics"] = [
		...(window["metrics"] || []),
		metric
	] as NextWebVitalsMetric[]
}

export default App
