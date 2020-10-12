import styled from "styled-components"

export const IntroductionContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-end;

	background-color: #282828;

	width: 100%;
	height: 100vh;
`;

export const IntroductionContent = styled.section`
	max-width: var(--content-boxed-max-width);

	width: 100%;
	height: calc(100% - var(--navbar-height));
`;

export const Avatar = styled.img`
	opacity: 0.7;

	height: 100%;
	width: auto;

	user-select: none;
`;