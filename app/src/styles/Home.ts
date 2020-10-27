import styled from "styled-components"

import { Timeline } from "@/components"

import {
	LazyLoadedElement,
	Section,
	Icon
} from "@/components" 

export const TimelineSectionContainer = styled(Section.Container)``

export const TimelineSectionContent = styled(Section.Content)``

export const SkillsSectionContainer = styled(Section.Container)`
`

export const SkillsSectionContent = styled(Section.Content)`
`

export const SkillsGlobeContainer = styled(LazyLoadedElement)`
	width: 100%;
	height: 100%;

	margin: var(--section-content-items-margin);

	display: flex;
	align-items: center;
	justify-content: center;
`

export const SeeMoreContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: flex-end;

	@media (max-width: 768px) {
		justify-content: center;
	}
`

export const ContactSectionContainer = styled(Section.Container)`
	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const ContactSectionContent = styled(Section.Content)``

export const ContactInfoContainer = styled.div`
	margin: var(--section-content-items-margin);

	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const ContactInfoContent = styled.div`
	display: flex;
	align-items: center;

	a {
		margin-left: 1rem;
	}

	margin-bottom: 1rem;
`

export const ContactInfoLink = styled.a`
	font-weight: bolder;

	@media (max-width: 768px) {
		font-size: 1.8rem;
	}
`

export const TimelineContainer = styled(LazyLoadedElement)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	margin: var(--section-content-items-margin);
	margin-bottom: 0;

	@media (max-width: 768px) {
		display: none;
	}
`

export const TimelineMobileContainer = styled(TimelineContainer)`
	display: none;

	@media (max-width: 768px) {
		display: flex;
	}
`

export const TimelineMobileContent = styled.div``

export const TimelineContent = styled(Timeline.Content)`
	width: 100%;
	height: 100%;

	background-color: var(--black-color-1);

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.25);

	@media (max-width: 768px) {
		max-width: 100%;
	}
`

export const TimelineOppositeContent = styled(Timeline.OppositeContent)`
`

export const TimelineTitleContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;

	margin-bottom: 2rem;
`

export const TimelineIcon = styled(Icon)``

export const TimelineTitle = styled.h1`
	color: var(--gray-color-15);

	font-size: 3.25rem;

	margin-left: 2rem;

	@media (max-width: 768px) {
		font-size: 2.8rem;
	}
`

export const TimelineDescription = styled.small`
	color: var(--gray-color-15);

	margin-bottom: 2rem;

	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
`

export const TimelineSubTitle = styled.h2`
	color: var(--gray-color-15);

	@media (max-width: 768px) {
		font-size: 1.8rem;
	}
`

export const TimelineDate = styled.h2`
	color: var(--gray-color-15);

	@media (max-width: 768px) {
		margin-left: 2rem;
		font-size: 1.8rem;
	}
`