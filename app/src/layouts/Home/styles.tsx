import styled from "styled-components"

export const HomeContainer = styled.div`
	position: relative;

	width: 100%;
	height: 1920px;

	background-color: var(--gray-color-1);

	z-index: -2;

	background-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgba(255,255,255,0.05) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%);
	background-size: 300px;
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
