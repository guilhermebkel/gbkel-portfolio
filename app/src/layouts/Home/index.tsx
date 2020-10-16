import React from "react"
import Head from "next/head"

import {
	HomeContainer
} from "@/layouts/Home/styles"

import { SiriWave } from "@/components"

const HomeLayout: React.FC = (props) => {
	const { children } = props

	return (
		<HomeContainer>
			<Head>
				<title>Guilherme Mota</title>
			</Head>

			{children}

			<SiriWave />
		</HomeContainer>
	)
}

export default HomeLayout
