import React from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"

import HomeLayout from "@/layouts/Home"

import IntroductionSection from "@/views/Home/sections/Introduction"
const TimelineSection =  dynamic(() => import("@/views/Home/sections/Timeline"))
const SkillsSection =  dynamic(() => import("@/views/Home/sections/Skills"))
const ContactSection =  dynamic(() => import("@/views/Home/sections/Contact"))
const QuotesSection =  dynamic(() => import("@/views/Home/sections/Quotes"))

import { isMobileRequest } from "@/lib/validation"

type HomeProps = {
	isMobile: boolean
}

const Home: NextPage<HomeProps> = (props) => {
	const { isMobile } = props

	return (
		<HomeLayout isMobile={isMobile}>
			<IntroductionSection />

			<TimelineSection />
			
			<SkillsSection />

			<QuotesSection />

			<ContactSection />
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
