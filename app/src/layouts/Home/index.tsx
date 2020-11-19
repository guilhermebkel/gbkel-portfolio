import React from "react"
import Head from "next/head"

import {
	HomeContainer
} from "@/layouts/Home/styles"

import { buildCDNUrl } from "@/lib/cdn"
import { appUrls } from "@/lib/personal"

import {
	SiriWave,
	MetaTag
} from "@/components"

type HomeLayoutProps = {
	isMobile?: boolean
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
	const { children, isMobile } = props

	return (
		<HomeContainer>
			<Head>
				<MetaTag
					description="All info about Guilherme Mota."
					imageSrc={buildCDNUrl("/favicon.png")}
					title="Guilherme Mota"
					url={appUrls.home}
				/>
			</Head>

			{children}

			{!isMobile && (
				<SiriWave />
			)}
		</HomeContainer>
	)
}

export default HomeLayout
