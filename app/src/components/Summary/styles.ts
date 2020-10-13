import styled from "styled-components"

export const SummaryContainer = styled.div`
	width: auto;
	height: auto;

	display: flex;
	align-items: center;

	z-index: 3;
`

export const SummaryContent = styled.div`
	display: flex;
	flex-direction: column;

	max-width: 52.25rem;
`

export const SummaryType = styled.p`
	text-transform: uppercase;
	letter-spacing: 0.6rem;
	
	text-align: left;

	color: var(--gray-color-15);

	margin-bottom: 2rem;
`

export const SummaryTitle = styled.h1`
	text-align: left;

	color: var(--gray-color-15);

	max-width: 36rem;

	margin-bottom: 3rem;
`

export const SummaryDescription = styled.p`
	text-align: left;

	color: var(--gray-color-15);

	line-height: 3rem;
`
