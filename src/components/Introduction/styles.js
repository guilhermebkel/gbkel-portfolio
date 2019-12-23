import styled from "styled-components"

export const Container = styled.section`
	position: relative;

	height: 100vh;
	width: 100vw;

	background-color: #444;
	
	user-select: none;
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
	text-align: left;
	line-height: 120px;

	width: 70%;

	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);

	b {
		color: ${(props) => props.theme.primary};
		opacity: 0.9;
	}
`

export const Description = styled(Title)`
	font-size: 50px;
	line-height: 60px;

	font-weight: normal;
`