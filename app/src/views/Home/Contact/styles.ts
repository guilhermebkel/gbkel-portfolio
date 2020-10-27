import styled from "styled-components"

import {
	Section
} from "@/components" 

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
