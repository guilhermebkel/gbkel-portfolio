import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import { isMobileRequest } from "@/lib/validation"

import {
	Summary,
	Spotlight,
	IconButton,
	Button,
	TagsGlobe
} from "@/components"

import {
	IntroductionSectionContainer,
	IntroductionSectionContent,
	Avatar,
	CodingSymbol,
	AuxBarContainer,
	AuxBarContent,
	SkillsSectionContainer,
	SkillsSectionContent,
	SkillsGlobeContainer,
	SeeMoreContainer
} from "@/styles/Home"

const SKILLS = [
	"Next.js", "React.js", "Typescript", "Node.js", "AWS", "Software Architecture", "Fast Learning",
	"Excellence", "Fast Delivery", "Commitment", "Quality Minded", "Javascript", "Software Patterns",
	"Solution Modelling"
]

import useResponsiveBreakpoints from "@/hooks/useResponsiveBreakpoints"

type HomeProps = {
	isMobile: boolean
}

const Home: NextPage<HomeProps> = (props) => {
	const { isMobile } = props

	const { currentResult } = useResponsiveBreakpoints<{ globeSize: number, globeFontSize: number }>({
		breakpoints: {
			sm: { globeSize: 300, globeFontSize: 10 },
			md: { globeSize: 500, globeFontSize: 17 },
			xl: { globeSize: 700, globeFontSize: 17 }
		},
		initialValue: { globeSize: 700, globeFontSize: 17 }
	})

	return (
		<HomeLayout isMobile={isMobile}>
			<IntroductionSectionContainer>
				<IntroductionSectionContent>
					<Summary
						spotlightWidth="170px"
						type="Introduction"
						title="Guilherme Mota."
						description="A problem solver who knows that knows nothing, passionate about cloud computing and complex systems."
					/>
	
					<Spotlight
						width="338px"
						height="85px"
						left="100px"
						bottom="60px"
					>
						<CodingSymbol>
							{"</>"}
						</CodingSymbol>
					</Spotlight>
					
					<Avatar
						src="/images/avatar.jpg"
						alt="avatar"
						width="1080px"
						height="1080px"
					/>
				</IntroductionSectionContent>
	
				<AuxBarContainer>
					<AuxBarContent>
						<IconButton
							src="/icons/whatsapp.svg"
							href="https://api.whatsapp.com/send?phone=5527996334936"
							alt="whatsapp"
						/>
	
						<IconButton
							src="/icons/linkedin.svg"
							href="https://www.linkedin.com/in/guilhermebkel"
							alt="linkedin"
						/>
	
						<IconButton
							src="/icons/mail.svg"
							href="mailto:guilhermebromonschenkel@gmail.com"
							alt="mail"
						/>
	
						<IconButton
							src="/icons/github.svg"
							href="https://github.com/guilhermebkel"
							alt="github"
						/>
					</AuxBarContent>
				</AuxBarContainer>
			</IntroductionSectionContainer>
	
			<SkillsSectionContainer>
				<SkillsSectionContent>
					<Summary
						spotlightWidth="170px"
						type="About"
						title="Skills."
						description="A list of skills I have developed by practical and theoretical experiences."
					/>
	
					<SkillsGlobeContainer
						initInvisible
						threshold={0.3}
					>
						<TagsGlobe
							width={currentResult.globeSize}
							height={currentResult.globeSize}
							fontSize={currentResult.globeFontSize}
							tags={SKILLS}
						/>
					</SkillsGlobeContainer>
	
					<SeeMoreContainer>
						<Button href="https://about.guilherr.me/skills">
							CLICK HERE TO SEE MORE
						</Button>
					</SeeMoreContainer>
				</SkillsSectionContent>
			</SkillsSectionContainer>
		</HomeLayout>
	)
}

Home.getInitialProps = (ctx) => {
	const isMobile = isMobileRequest(ctx)
	console.log(isMobile)
	return {
		isMobile: !!isMobile
	}
}

export default Home
