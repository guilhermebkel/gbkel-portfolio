import styled from "styled-components"

import { Section } from "@/components"

import { LazyLoadedImage } from "@/components" 

export const IntroductionSectionContainer = styled(Section.Container)`
	align-items: flex-end;

	background-color: #282828;

	height: 100vh !important;

	box-shadow: 0 10px 25px var(--gray-color-1);

	position: relative;

	z-index: 2;
`;

export const IntroductionSectionContent = styled(Section.Content)`
	height: calc(100% - var(--navbar-height));

	position: relative;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Avatar = styled(LazyLoadedImage)`
	position: absolute;

	top: 0;
	left: 0;

	opacity: 0.7 !important;

	height: 100%;
	width: auto;

	object-fit: cover;

	max-width: 100%;

	user-select: none;

	z-index: 0;
`;

export const CodingSymbol = styled.h1`
	font-size: 36rem;

	color: var(--gray-color-15);

	margin-bottom: 6rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const AuxBarContainer = styled.div`
	width: 100%;
	height: var(--navbar-height);

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;

	bottom: 0;
	left: 0;

	z-index: 3;
`

export const AuxBarContent = styled.div`
	width: var(--section-context-fluid-max-width);
	height: 100%;

	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > * {
		margin-right: 1.5rem;
	}

	& > *:last-child {
		margin-right: 0;
	}
`

export const SkillsSectionContainer = styled(Section.Container)`
	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const SkillsSectionContent = styled(Section.Content)`
`

export const SkillsGlobeContainer = styled.div`
	width: 100%;
	height: 100%;

	margin: 5rem 0;

	display: flex;
	align-items: center;
	justify-content: center;
`

export const SeeMoreContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: flex-end;
`