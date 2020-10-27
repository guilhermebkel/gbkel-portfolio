import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import IntroductionSection from "@/pages/home/_sections/Introduction"
import TimelineSection from "@/pages/home/_sections/Timeline"
import SkillsSection from "@/pages/home/_sections/Skills"
import ContactSection from "@/pages/home/_sections/Contact"

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
