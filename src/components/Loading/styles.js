import styled from "styled-components"

export const Container = styled.div`
	background-color: ${(props) => props.theme.secondary};
	width: 100vw;
	height: 100vh;

	position: fixed;
	z-index: 200;

	justify-content: center;
	
	display: flex;
`

export const AnimatedLogo = styled.object`
	width: 85px;
	height: auto;
`
