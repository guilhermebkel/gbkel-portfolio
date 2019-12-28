import styled from "styled-components"

import ScreenComponent from "../../components/Screen"

export const Screen = styled(ScreenComponent)`
	flex-direction: row;
`

export const Description = styled.span`
	font-size: 15px;
	color: #FFF;

	margin: auto 0 auto auto;
	padding-right: 50px;
`

export const Col = styled.div`
	width: ${({ width }) => width};
	height: 100%;

	display: flex;

	@media only screen and (max-width: 576px) {
		display: ${({ disableOnMobile }) => disableOnMobile ? "none" : "flex"};
		width: ${({ disableOnMobile }) => !disableOnMobile && "100%"};

		span {
			padding: 30px;
			text-align: center;
			margin: auto;
		}
	}
`
