import styled from "styled-components"

export const HomeContainer = styled.div`
	position: relative;

	width: 100%;
	height: 1920px;

	background-color: var(--gray-color-1);

	z-index: -2;
`

export const SiriWave = styled.div`
	height: 100px;
	width: 100%;

	margin: auto;

	opacity: 0.08;

	position: fixed;

	top: 0;
	bottom: 0;

	transform: rotate(90deg);

	z-index: -1;
`
