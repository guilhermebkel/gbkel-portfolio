import React from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"

import HomeLayout from "@/layouts/Home"

import IntroductionSection from "@/views/Home/Introduction"
const TimelineSection =  dynamic(() => import("@/views/Home/Timeline"))
const SkillsSection =  dynamic(() => import("@/views/Home/Skills"))
const ContactSection =  dynamic(() => import("@/views/Home/Contact"))
const QuotesSection =  dynamic(() => import("@/views/Home/Quotes"))

import { getDeviceInfo, getRequestUserAgent } from "@/lib/validation"

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
	const userAgent = getRequestUserAgent(ctx)

	const { isMobile } = getDeviceInfo(userAgent)

	return {
		isMobile
	}
}

export default Home
