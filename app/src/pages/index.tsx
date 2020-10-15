import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import {
	Summary,
	Spotlight,
	IconButton,
	Button,
	TagsGlobe
} from "@/components"

import {
	IntroductionContainer,
	IntroductionContent,
	Avatar,
	CodingSymbol,
	AuxBarContainer,
	AuxBarContent,
	SkillsContainer,
	SkillsContent,
	SkillsGlobeContainer,
	SeeMoreContainer
} from "@/styles/Home"

const SKILLS = [
	"Next.js", "React.js", "Typescript", "Node.js", "AWS", "Software Architecture", "Fast Learning",
	"Excellence", "Fast Delivery", "Commitment", "Quality Minded", "Javascript", "Software Patterns",
	"Solution Modelling"
]

const Home: NextPage = () => (
	<HomeLayout>
		<IntroductionContainer>
			<IntroductionContent>
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
				/>
			</IntroductionContent>

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
		</IntroductionContainer>

		<SkillsContainer>
			<SkillsContent>
				<Summary
					spotlightWidth="170px"
					type="About"
					title="Skills."
					description="A list of skills I have developed by practical and theoretical experiences."
				/>

				<SkillsGlobeContainer>
					<TagsGlobe
						width={700}
						height={700}
						tags={SKILLS}
					/>
				</SkillsGlobeContainer>

				<SeeMoreContainer>
					<Button href="https://about.guilherr.me/skills">
						CLICK HERE TO SEE MORE
					</Button>
				</SeeMoreContainer>
			</SkillsContent>
		</SkillsContainer>
	</HomeLayout>
)

export default Home
