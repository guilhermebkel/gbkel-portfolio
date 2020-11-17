import styled from "styled-components"

import {
	Section,
	LazyLoadedImage
} from "@/components" 

export const PostListSectionContainer = styled(Section.Container)`
	margin-top: var(--section-container-margin-bottom);

	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const PostListSectionContent = styled(Section.Content)``

export const PostsContainer = styled.div`
	margin-top: var(--section-container-margin-bottom);

	& > *:last-child {
		display: none;
	}
`

export const PostsContent = styled.div<{ postsCount: number }>`
	display: grid;

	grid-template-columns: ${(props) => `repeat(${props.postsCount}, 1fr)`};

	grid-gap: 3rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 6rem;
	}
`

export const PostItemContainer = styled.article`
`

export const PostItemContent = styled.a<{ postsCount: number }>`
	display: flex;
	flex-direction: ${(props) => `${props.postsCount === 1 ? "row" : "column"}`};
	opacity: 0.9;
	padding-right: 0;

	transition: all 0.25s ease;

	&::before {
		content: none;
	}

	& > *:first-child {
		margin-bottom: ${(props) => `${props.postsCount > 1 ? "3rem" : 0}`};
		margin-right: ${(props) => `${props.postsCount > 1 ? 0 : "4rem"}`};
	}

	@media (max-width: 768px) {
		flex-direction: column;
		
		& > *:first-child {
			margin-bottom: 3rem;
			margin-right: 0;
		}
	}

	&:hover {
		opacity: 1;
	}
`

export const PostCover = styled(LazyLoadedImage)`
	width: 100%;
	height: 300px;
	background-color: var(--gray-color-2);
	border-radius: 1rem;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;

		box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.25);

		object-fit: cover;
		object-position: center;

		transform: scale(1.2);
	}
`

export const PostDivider = styled.div`
	background-color: var(--gray-color-5);

	height: 1px;
	width: 100%;

	margin: 4rem 0;

	@media (max-width: 768px) {
		height: 6rem;
		margin: 0;
		background-color: transparent;
	}
`
