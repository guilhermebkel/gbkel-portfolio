import styled from "styled-components"

export const Container = styled.div`
	position: absolute;
	width: 100vw;

	bottom: ${({ position }) => position === "bottom" && 0};
	top: ${({ position }) => position === "top" && 0};

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-content: center;
	align-items: center;

	@media only screen and (max-width: 576px) {
		bottom: ${({ position }) => position === "bottom" && "60px"};
	}
`

export const LineHolder = styled.div`
	width: 1px;
	height: 60px;
	background-color: #FFF;
	opacity: 0.7;

	@media only screen and (max-width: 576px) {
		height: 30px;
		display: ${({ position }) => position === "bottom" && "none"};
	}
`

export const Info = styled.span`
	color: #FFF;
	font-size: 18px;

	@media only screen and (max-width: 576px) {
		font-size: 16px;
	}
`

export const LightningBall = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 100%;
	background-color: #FFF;

	margin-top: ${({ position }) => position === "bottom" && "8px"};
	margin-bottom: ${({ position }) => position === "top" && "8px"};

	animation: pulseball 2.5s infinite;

	@keyframes pulseball {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
		}
	}

	@media only screen and (max-width: 576px) {
		display: ${({ position }) => position === "bottom" && "none"};
	}
`