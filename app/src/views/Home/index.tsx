import React from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"

import HomeLayout from "@/layouts/Home"

import IntroductionSection from "@/views/Home/Introduction"
const TimelineSection =  dynamic(() => import("@/views/Home/Timeline"))
const SkillsSection =  dynamic(() => import("@/views/Home/Skills"))
const ContactSection =  dynamic(() => import("@/views/Home/Contact"))

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
