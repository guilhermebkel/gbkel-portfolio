import styled from "styled-components"

export const Content = styled.div`
	position: absolute;
	top: 25vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (min-width: 992px) {
		top: 30vh;
	}
`

export const Title = styled.h1`
	color: #FFF;

	font-weight: bold;
	font-size: 60px;
	text-align: center;
	line-height: 120px;

	width: 70%;

	text-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);

	b {
		color: ${(props) => props.theme.primary};
		opacity: 0.9;
	}

	@media only screen and (max-width: 1600px) {
		font-size: 40px;
		line-height: 50px;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 45px;
		line-height: 55px;
	}

	@media only screen and (max-width: 768px) {
		font-size: 40px;
		line-height: 50px;
	}

	@media only screen and (max-width: 576px) {
		font-size: 25px;
		line-height: 30px;
		width: 60%;
	}
`

export const Description = styled(Title)`
	font-size: 40px;
	line-height: 50px;

	font-weight: normal;
`