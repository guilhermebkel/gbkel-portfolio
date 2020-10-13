import React from "react"

import {
	SummaryContainer,
	SummaryContent,
	SummaryType,
	SummaryTitle,
	SummaryDescription
} from "@/components/Summary/styles"

type SummaryProps = {
	type: string
	title: string
	description: string
	spotlightSize?: string
}

const Summary: React.FC<SummaryProps> = (props) => {
	const { type, title, description, spotlightSize } = props

	return (
		<SummaryContainer>
			<SummaryContent>
				<SummaryType>
					{type}
				</SummaryType>

				<SummaryTitle
					spotlightSize={spotlightSize}
				>
					{title}
				</SummaryTitle>

				<SummaryDescription>
					{description}
				</SummaryDescription>
			</SummaryContent>
		</SummaryContainer>
	)
}

export default Summary
