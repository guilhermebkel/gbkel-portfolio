import React from "react"
import Head from "next/head"

import {
	HomeContainer
} from "@/layouts/Home/styles"

import { SiriWave } from "@/components"

type HomeLayoutProps = {
	isMobile?: boolean
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
	const { children, isMobile } = props

	return (
		<HomeContainer>
			<Head>
				<title>Guilherme Mota</title>
				<meta name="description" content="All info about Mota."/>
			</Head>

			{children}

			{!isMobile && (
				<SiriWave />
			)}
		</HomeContainer>
	)
}

export default HomeLayout
