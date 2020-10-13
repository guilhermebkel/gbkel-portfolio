import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import {
	Summary,
	Spotlight
} from "@/components"

import {
	IntroductionContainer,
	IntroductionContent,
	Avatar,
	CodingSymbol
} from "@/styles/Home"

const Home: NextPage = () => {
	return (
		<HomeLayout>
			<IntroductionContainer>
				<IntroductionContent>
					<Summary
						spotlightWidth="164px"
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
	)
}

export default Home
