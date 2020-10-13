import styled from "styled-components"

import { LazyLoadedImage } from "@/components" 

export const IntroductionContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-end;

	background-color: #282828;

	width: 100%;
	height: 100vh;

	box-shadow: 0 10px 25px var(--gray-color-1);
`;

export const IntroductionContent = styled.section`
	max-width: var(--content-boxed-max-width);

	width: 100%;
	height: calc(100% - var(--navbar-height));
`;

export const Avatar = styled(LazyLoadedImage)`
	opacity: 0.7 !important;

	height: 100%;
	width: auto;

	user-select: none;
`;