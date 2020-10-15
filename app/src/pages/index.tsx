import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import {
	Summary,
	Spotlight,
	IconButton
} from "@/components"

import {
	IntroductionContainer,
	IntroductionContent,
	Avatar,
	CodingSymbol,
	AuxBarContainer,
	AuxBarContent
} from "@/styles/Home"

const Home: NextPage = () => {
	return (
		<>
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
				</IntroductionContainer>
			</HomeLayout>
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
		</>
	)
}

export default Home
