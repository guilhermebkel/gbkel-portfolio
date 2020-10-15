import styled from "styled-components"

export const SectionContainer = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: var(--section-container-margin-bottom);
`

export const SectionContent = styled.div`
	max-width: var(--section-content-boxed-max-width);

	width: 100%;
	height: 100%;

	margin: 0 var(--section-content-mobile-margin);

	z-index: 2;
`