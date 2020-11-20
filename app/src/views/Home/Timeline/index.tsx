import React from "react"

import {
	Summary,
	Timeline
} from "@/components"

import {
	TimelineContainer,
	TimelineContent,
	TimelineDate,
	TimelineDescription,
	TimelineIcon,
	TimelineMobileContainer,
	TimelineMobileContent,
	TimelineOppositeContent,
	TimelineSectionContainer,
	TimelineSectionContent,
	TimelineSubTitle,
	TimelineTitle,
	TimelineTitleContainer
} from "@/views/Home/Timeline/styles"

import { timeline } from "@/lib/personal"

const TimelineSection: React.FC = () => (
	<TimelineSectionContainer>
		<TimelineSectionContent>
			<Summary
				spotlightWidth="260px"
				type="About"
				title="Timeline."
				description="A summarized timeline about my journey on the incredible ecosystem of technology and development."
			/>

			<TimelineMobileContainer>
				<TimelineMobileContent>
					{timeline.map((timelineItem, index) => (
						<Timeline.Item key={index}>
							<TimelineContent>
								<TimelineTitleContainer>
									<TimelineIcon
										src={timelineItem.iconSrc}
										alt={timelineItem.title}
									/>
									<TimelineTitle>
										{timelineItem.title}
									</TimelineTitle>
									<TimelineDate>
										({timelineItem.date})
									</TimelineDate>
								</TimelineTitleContainer>

								<TimelineDescription>
									{timelineItem.description}
								</TimelineDescription>

								<TimelineSubTitle>
									{timelineItem.subtitle}
								</TimelineSubTitle>
							</TimelineContent>
						</Timeline.Item>
					))}
				</TimelineMobileContent>
			</TimelineMobileContainer>

			<TimelineContainer>
				<Timeline>
					{timeline.map((timelineItem, index) => (
						<Timeline.Item key={index}>
							<TimelineContent
								style={{
									order: index % 2 === 0 ? 0 : 2
								}}
							>
								<TimelineTitleContainer>
									<TimelineIcon
										src={timelineItem.iconSrc}
										alt={timelineItem.title}
									/>
									<TimelineTitle>
										{timelineItem.title}
									</TimelineTitle>
								</TimelineTitleContainer>

								<TimelineDescription>
									{timelineItem.description}
								</TimelineDescription>

								<TimelineSubTitle>
									{timelineItem.subtitle}
								</TimelineSubTitle>
							</TimelineContent>

							<Timeline.Separator />

							<TimelineOppositeContent
								style={{
									order: index % 2 === 0 ? 2 : 0,
									justifyContent: index % 2 !== 0 && "flex-end"
								}}
							>
								<TimelineDate>
									{timelineItem.date}
								</TimelineDate>
							</TimelineOppositeContent>
						</Timeline.Item>
					))}
				</Timeline>
			</TimelineContainer>
		</TimelineSectionContent>
	</TimelineSectionContainer>
)

export default TimelineSection
