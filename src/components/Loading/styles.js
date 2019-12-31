import styled from "styled-components"

export const Container = styled.div`
	background-color: ${(props) => props.theme.secondary};
	width: 100vw;
	height: 100vh;

	position: fixed;
	z-index: 200;

	justify-content: center;
	
	display: flex;

	animation: fadeOut 0.5s forwards;
	animation-delay: 4.75s;

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			display: none;
		}
	}
`

export const AnimatedLogo = styled.object`
	width: 85px;
	height: auto;
`
