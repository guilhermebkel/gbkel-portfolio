import React from "react"

import {
	TimelineContainer,
	TimelineItem,
	TimelineOppositeContent,
	TimelineContent,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot
} from "@/components/Timeline/styles"

type TimelineProps = {
	timeline: Array<{
		title: string
		subtitle: string
		description: string
		iconSrc?: string
		date: string
	}>
}

const Timeline: React.FC<TimelineProps> = (props) => {
	const { timeline } = props

	return (
		<TimelineContainer>
			{timeline.map(timelineItem => (
				<TimelineItem key={timelineItem.title}>
					<TimelineContent>
						{timelineItem.title}
					</TimelineContent>

					<TimelineSeparator>
						<TimelineDot />

						<TimelineConnector />
					</TimelineSeparator>

					<TimelineOppositeContent>
						{timelineItem.date}
					</TimelineOppositeContent>
				</TimelineItem>
			))}
		</TimelineContainer>
	)
}

export default Timeline
