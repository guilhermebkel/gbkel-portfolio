import styled from "styled-components"

export const LoadingContainer = styled.div<{ isLoaded: boolean }>`
	width: 100vw;
	height: 100vh;

	display: ${(props) => props.isLoaded ? "none" : "flex"};
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;

	background-color: var(--gray-color-1);
	opacity: ${(props) => props.isLoaded ? 0 : 1};

	z-index: 5;

	transition: all 0.1s;
`

export const Logo = styled.img`
	width: auto;
	height: 10rem;

	animation: pulse 1.5s infinite; 

	@keyframes pulse {
		0% { transform: scale(1); }
		66% { transform: scale(1.3); }
		100% { transform: scale(1); }
	}
`
