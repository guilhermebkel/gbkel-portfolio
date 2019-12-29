import styled from "styled-components"

import ScreenComponent from "../../components/Screen"

export const Screen = styled(ScreenComponent)`
	flex-direction: row;
`

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-content: center;
	justify-content: center;
`

export const DescriptionContainer = styled.div`
	margin: auto 50px auto auto;
	max-width: 500px;

	button {
		font-size: 15px;
	}

	@media only screen and (max-width: 1200px) {
		max-width: 400px;
	}

	@media only screen and (max-width: 992px) {
		max-width: 300px;
	}

	@media only screen and (max-width: 768px) {
		margin: auto;
		text-align: center;
	}
`

export const GlobeContainer = styled.div`
	margin: auto auto auto 0;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`

export const Text = styled.span`
	font-size: 18px;
	color: #FFF;

	text-shadow: 2px 5px 20px rgba(0, 0, 0, 0.01);

	strong {
		font-size: 60px;
		line-height: 65px;
	}

	@media only screen and (max-width: 1600px) {
		font-size: 16px;

		strong {
			font-size: 45px;
			line-height: 50px;
		}
	}

	@media only screen and (max-width: 1200px) {
		font-size: 16px;

		strong {
			font-size: 40px;
			line-height: 45px;
		}
	}

	@media only screen and (max-width: 992px) {
		font-size: 15px;

		strong {
			font-size: 25px;
			line-height: 30px;
		}
	}
`
