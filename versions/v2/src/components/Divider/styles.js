import styled from "styled-components"

export const Container = styled.div`
	width: 100%;

	height: ${({ size }) => (
		size === "small"
			? "8px"
			: size === "medium"
				? "16px"
				: size === "large"
					? "24px"
					: null
	)}
`