import styled from "styled-components"

import {
	LazyLoadedElement,
	Section
} from "@/components" 

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
