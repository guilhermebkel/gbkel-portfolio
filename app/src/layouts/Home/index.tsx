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

	const title = "Guilherme Mota"
	const description = "All info about Guilherme Mota."

	return (
		<HomeContainer>
			<Head>
				<MetaTag
					page={{
						title,
						description
					}}
					share={{
						title,
						description,
						imageSrc: buildCDNUrl("/favicon.png"),
						url: appUrls.home,
						type: "website"
					}}
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
