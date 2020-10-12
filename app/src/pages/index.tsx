import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import {
	IntroductionContainer,
	IntroductionContent,
	Avatar
} from "@/styles/Home"

const Home: NextPage = () => {
	return (
		<HomeLayout>
			<IntroductionContainer>
				<IntroductionContent>
					<Avatar
						src="/images/avatar.jpg"
						loading="lazy"
					/>
				</IntroductionContent>
			</IntroductionContainer>
		</HomeLayout>
	)
}

export default Home
