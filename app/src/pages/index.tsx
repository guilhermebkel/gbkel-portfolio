import React from "react"
import { NextPage, GetStaticProps } from "next"

import {
	getAllPublicPictureBlurHashes,
	PublicPictureBlurHashes
} from "@/lib/picture"

import HomeLayout from "@/layouts/Home"

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

type HomeProps = {
	publicPictureBlurHashes: PublicPictureBlurHashes
}

const Home: NextPage<HomeProps> = () => (
	<HomeLayout>
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
			</SkillsSectionContent>
		</SkillsSectionContainer>
	</HomeLayout>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const publicPictureBlurHashes = await getAllPublicPictureBlurHashes()

	return {
		props: {
			publicPictureBlurHashes
		}
	}
}
