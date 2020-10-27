import React from "react"
import { StyledComponent } from "styled-components"

import {
	TimelineContainer,
	TimelineItem,
	TimelineOppositeContent,
	TimelineContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineConnectorContainer
} from "@/components/Timeline/styles"

type TimelineOptions = {
	// eslint-disable-next-line
	Item: StyledComponent<"li", any, {}, never>
	Separator: React.FC
	// eslint-disable-next-line
	Content: StyledComponent<"div", any, {}, never>
	// eslint-disable-next-line
	OppositeContent: StyledComponent<"div", any, {}, never>
}

const Timeline: React.FC & TimelineOptions = (props) => {
	const { children } = props

	return (
		<TimelineContainer>
			{children}

			<TimelineConnectorContainer>
				<TimelineConnector />
			</TimelineConnectorContainer>
		</TimelineContainer>
	)
}

const Separator: React.FC = () => (
	<TimelineSeparator>
		<TimelineDot />
	</TimelineSeparator>
)

Timeline.Separator = Separator
Timeline.Item = TimelineItem
Timeline.Content = TimelineContent
Timeline.OppositeContent = TimelineOppositeContent

export default Timeline
