import React from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"

import HomeLayout from "@/layouts/Home"

import IntroductionSection from "@/views/Home/Introduction"

import { LazyLoadedElement } from "@/components"

import { isMobileRequest } from "@/lib/validation"

type HomeProps = {
	isMobile: boolean
}

const Home: NextPage<HomeProps> = (props) => {
	const { isMobile } = props

	const lazyLoadSection = (sectionFileName: string) => {
		const Section = dynamic(() => import(`@/views/Home/${sectionFileName}`))

		return (
			<Section />
		)
	}

	return (
		<HomeLayout isMobile={isMobile}>
			<IntroductionSection />

			<LazyLoadedElement
				mountPureOnVisible
				initInvisible
				highPriority
				threshold={0}
			>
				{lazyLoadSection("Timeline")}
			</LazyLoadedElement>
			
	
			<LazyLoadedElement
				mountPureOnVisible
				initInvisible
				highPriority
				threshold={0}
			>
				{lazyLoadSection("Skills")}
			</LazyLoadedElement>

			<LazyLoadedElement
				mountPureOnVisible
				initInvisible
				highPriority
				threshold={0}
			>
				{lazyLoadSection("Contact")}
			</LazyLoadedElement>
		</HomeLayout>
	)
}

Home.getInitialProps = (ctx) => {
	const isMobile = isMobileRequest(ctx)

	return {
		isMobile: !!isMobile
	}
}

export default Home
