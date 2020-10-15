import styled from "styled-components"

import { LazyLoadedImage } from "@/components" 

export const IntroductionContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-end;

	background-color: #282828;

	width: 100%;
	height: 100vh;

	box-shadow: 0 10px 25px var(--gray-color-1);

	position: relative;

	margin-bottom: var(--section-container-margin-bottom);

	z-index: 2;
`;

export const IntroductionContent = styled.section`
	max-width: var(--section-content-boxed-max-width);

	width: 100%;
	height: calc(100% - var(--navbar-height));
	margin: 0 var(--section-content-mobile-margin);

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

export const SkillsContainer = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	padding-bottom: var(--section-container-margin-bottom);
`

export const SkillsContent = styled.div`
	max-width: var(--section-content-boxed-max-width);

	width: 100%;
	height: 100%;

	z-index: 2;
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