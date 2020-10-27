import styled from "styled-components"
import NextImage from "next/image"

export const Image = styled(NextImage)<{ loaded: boolean }>`
	filter: ${(props) => `${props.loaded ? "none" : "blur(10px)"}`};

	opacity: ${(props) => `${props.loaded ? 1 : 0}`};
	
	transition: all 0.7s ease-in-out;
`