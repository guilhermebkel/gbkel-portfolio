import styled from "styled-components"

export const Container = styled.div`
	position: relative;

	height: 100vh;
	width: 100vw;

	background-color: #333;
`

export const Content = styled.div`
	position: absolute;
	top: 300px;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Title = styled.h1`
	color: #FFF;

	font-weight: bold;
	font-size: 70px;
	text-align: center;
	line-height: 90px;

	width: 70%;

	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);

	b {
		color: ${(props) => props.theme.primary};
		opacity: 0.9;
	}
`