import React from "react"

import {
	Summary,
	Spotlight,
	IconButton
} from "@/components"

import {
	IntroductionSectionContainer,
	IntroductionSectionContent,
	CodingSymbol,
	Avatar,
	AuxBarContainer,
	AuxBarContent
} from "@/views/Home/Introduction/styles"

import { contactMap } from "@/lib/personal"

const IntroductionSection: React.FC = () => (
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
				highPriority
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
)

export default IntroductionSection
