import React from "react"
import { NextPage } from "next"

import HomeLayout from "@/layouts/Home"

import {
	Summary
} from "@/components"

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
					<Summary
						spotlightSize="60%"
						type="Introduction"
						title="Guilherme Mota."
						description="A problem solver who knows that knows nothing, passionate about cloud computing and complex systems."
					/>

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
