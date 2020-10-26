import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import { isMobileRequest } from "@/lib/validation"
import { contactMap, timeline } from "@/lib/personal"

import {
	Summary,
	Spotlight,
	IconButton,
	Button,
	TagsGlobe,
	Icon,
	Timeline
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
	SeeMoreContainer,
	ContactSectionContainer,
	ContactSectionContent,
	ContactInfoContainer,
	ContactInfoContent,
	ContactInfoLink,
	TimelineContainer,
	TimelineContent
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
							src={contactMap.whatsapp.iconSrc}
							href={contactMap.whatsapp.url}
							alt={contactMap.whatsapp.alt}
						/>
	
						<IconButton
							src={contactMap.linkedin.iconSrc}
							href={contactMap.linkedin.url}
							alt={contactMap.linkedin.alt}
						/>
	
						<IconButton
							src={contactMap.mail.iconSrc}
							href={contactMap.mail.url}
							alt={contactMap.mail.alt}
						/>
	
						<IconButton
							src={contactMap.github.iconSrc}
							href={contactMap.github.url}
							alt={contactMap.github.alt}
						/>
					</AuxBarContent>
				</AuxBarContainer>
			</IntroductionSectionContainer>

			<TimelineContainer>
				<TimelineContent>
					<Summary
						spotlightWidth="260px"
						type="About"
						title="Timeline."
						description="A summarized timeline about my journey on the incredible ecosystem of technology and development."
					/>

					<Timeline
						timeline={timeline}
					/>
				</TimelineContent>
			</TimelineContainer>
	
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

			<ContactSectionContainer>
				<ContactSectionContent>
					<Summary
						spotlightWidth="190px"
						type="Contact"
						title="Get in touch."
						description="Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
					/>

					<ContactInfoContainer>
						<ContactInfoContent>
							<Icon
								src={contactMap.mail.iconSrc}
								alt={contactMap.mail.alt}
							/>

							<ContactInfoLink
								href={contactMap.mail.url}
								target="_blank"
							>
								{contactMap.mail.rawValue}
							</ContactInfoLink>
						</ContactInfoContent>
						
						<ContactInfoContent>
							<Icon
								src={contactMap.whatsapp.iconSrc}
								alt={contactMap.whatsapp.alt}
							/>

							<ContactInfoLink
								href={contactMap.whatsapp.url}
								target="_blank"
							>
								{contactMap.whatsapp.rawValue}
							</ContactInfoLink>
						</ContactInfoContent>
					</ContactInfoContainer>
				</ContactSectionContent>
			</ContactSectionContainer>
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
