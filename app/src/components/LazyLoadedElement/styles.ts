import styled from "styled-components"

export const Container = styled.div<{ visible: boolean }>`
	opacity: ${(props) => `${props.visible ? 1 : 0}`};
	
	transition: all 1s ease-in-out;
`
