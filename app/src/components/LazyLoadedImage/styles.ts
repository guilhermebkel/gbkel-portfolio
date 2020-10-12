import styled from "styled-components"

export const Image = styled.img`
	filter: ${(props) => `${props["loaded"] ? "none" : "blur(5px)"}`};

	opacity: ${(props) => `${props["loaded"] ? 1 : 0}`};
	
	transition: all 0.7s;
`