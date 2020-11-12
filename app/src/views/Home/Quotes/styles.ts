import styled from "styled-components"

import {
	Section,
	Icon
} from "@/components" 

export const QuotesSectionContainer = styled(Section.Container)`
`

export const QuotesSectionContent = styled(Section.Content)``

export const QuoteItemContainer = styled.div`
	display: flex;

	align-items: center;
	justify-content: center;

	margin: var(--section-content-items-margin);
`

export const QuoteItemContent = styled.div`
	flex-wrap: wrap;

	display: flex;

	align-items: center;
	justify-content: center;
`

export const QuoteItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 7rem;

	max-width: 52.25rem;

	@media (max-width: 768px) {
		margin: 4rem 0;
		max-width: 100%;
		width: 100%;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export const QuoteItemIcon = styled(Icon)`
	width: 5rem;
	height: 5rem;

	@media (max-width: 768px) {
		width: 4rem;
		height: 4rem;
	}
`

export const QuoteItemText = styled.h3`
	font-style: italic;
	font-weight: lighter;
	text-align: center;

	margin-top: 2rem;

	color: var(--gray-color-15);

	b {
		font-weight: lighter;
	}

	@media (max-width: 768px) {
		font-size: 2.5rem;

		b::after {
			max-width: 100%;
		}
	}
`
