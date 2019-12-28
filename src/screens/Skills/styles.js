import styled from "styled-components"

import ScreenComponent from "../../components/Screen"

export const Screen = styled(ScreenComponent)`
	flex-direction: row;
`

export const DescriptionContainer = styled.div`
	margin: auto 50px auto auto;

	button {
		font-size: 15px;
	}
`

export const Description = styled.span`
	font-size: 18px;
	color: #FFF;

	text-shadow: 2px 5px 20px rgba(0, 0, 0, 0.01);

	strong {
		font-size: 60px;
		line-height: 65px;
	}
`

export const Col = styled.div`
	width: ${({ width }) => width};
	height: 100%;

	display: flex;
	flex-direction: column;
`
