import styled from "styled-components"

import ScreenComponent from "../../components/Screen"

export const Screen = styled(ScreenComponent)`
	.ant-carousel .slick-slider {
		height: 100vh;
		width: 100vw;
	}
`

export const Content = styled.div`
	width: 100vw;

	display: flex !important;
	justify-content: center;
	align-items: center;
`

export const Project = styled.div`
	max-width: 1100px;
	min-width: 900px;
	min-height: 300px;
	
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 1200px) {
		max-width: 800px;
		min-width: 750px;
	}

	@media only screen and (max-width: 992px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (max-width: 576px) {
		max-width: 650px;
		min-width: 600px;
	}
`

export const Column = styled.div`
	width: ${({ width }) => width};
	order: ${({ order }) => order};
	height: auto;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	@media only screen and (max-width: 992px) {
		order: 1;
	}
`

export const TitleGroup = styled.div`
	display: flex;

	align-content: center;
	align-items: center;

	@media only screen and (max-width: 992px) {
		flex-direction: column;
		margin-top: 25px;

		text-align: center;
	}
`

export const ProjectIndex = styled.span`
	font-weight: bold;
	font-size: 16px;
	color: #FFF;
	opacity: 0.7;

	margin-right: 10px;
`

export const Title = styled.h1`
	color: #FFF;
	font-weight: bold;
	font-size: 70px;
	margin-bottom: 0;
	line-height: 65px;

	@media only screen and (max-width: 1600px) {
		font-size: 55px;
		line-height: 65px;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 45px;
		line-height: 55px;
	}

	@media only screen and (max-width: 992px) {
		font-size: 30px;
		line-height: 40px;
	}
`

export const Description = styled.span`
	font-size: 18px;
	color: #FFF;

	@media only screen and (max-width: 992px) {
		font-size: 16px;
		text-align: center;
	}
`

export const Mockup = styled.div`
	width: 90%;
	height: 300px;

	box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
	border-radius: 5px;

	background: url(${({ image }) => image});
	background-position: center;
  background-size: cover;

	margin: 0 auto;

	@media only screen and (max-width: 576px) {
		width: 250px;
		height: 150px;
	}
`

export const SelectorGroup = styled.div`
	margin-top: 20px;

	display: flex;

	justify-content: space-between;

	padding: 0 50px;

	@media only screen and (max-width: 992px) {
		display: none;
	}
`

export const Selector = styled.button`
	background: none;
	border: 0;
	outline: none;

	span {
		color: #FFF;
		font-size: 16px;
		font-weight: bold;
	}
	
	svg {
		color: #FFF;
		margin: 0 5px;
	}

	transition: opacity 0.15s ease-in-out;
	opacity: 0.7;

	&:hover {
		transition: opacity 0.15s ease-in-out;
		opacity: 1;
	}
`

export const ExternalLinkContainer = styled.div`
	@media only screen and (max-width: 992px) {
		margin: 0 auto;
	}
`