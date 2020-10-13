import React from "react"

import {
	SummaryContainer,
	SummaryContent,
	SummaryType,
	SummaryTitle,
	SummaryDescription
} from "@/components/Summary/styles"

import {
	Spotlight
} from "@/components"

type SummaryProps = {
	type: string
	title: string
	description: string
	spotlightWidth?: string
}

const Summary: React.FC<SummaryProps> = (props) => {
	const { type, title, description, spotlightWidth } = props

	return (
		<SummaryContainer>
			<SummaryContent>
				<SummaryType>
					{type}
				</SummaryType>


				<Spotlight
					width={spotlightWidth}
					bottom="-0.5rem"
					left="0"
					height="3.5rem"
				>
					<SummaryTitle>
						{title}
					</SummaryTitle>
				</Spotlight>

				<SummaryDescription>
					{description}
				</SummaryDescription>
			</SummaryContent>
		</SummaryContainer>
	)
}

export default Summary
