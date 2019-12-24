import styled from "styled-components"

export const Container = styled.div`
	position: relative;

	width: 100vw;
	height: 100vh;

	background-color: ${(props) => props.color === "primary" && props.theme.primary};
	background-color: ${(props) => props.color === "secondary" && props.theme.secondary};

	user-select: none;
`