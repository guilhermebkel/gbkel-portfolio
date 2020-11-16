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
`

export const PostsContent = styled.div`
	display: grid;

	grid-template-columns: repeat(3, 1fr);

	grid-gap: 6rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const PostItemContainer = styled.article`
`

export const PostItemContent = styled.a`
	display: flex;
	flex-direction: column;

	&::before {
		content: none;
	}

	& > * {
		margin-bottom: 2rem;
	}
`

export const PostCover = styled(LazyLoadedImage)`
	width: 100%;
	height: 290px;
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

export const PostTagContainer = styled.div`
	display: flex;

	align-items: center;

	width: 100%;

	flex-wrap: wrap;
`

export const PostTag = styled.h4`
	color: var(--black-color-4);

	padding: 0.5rem 1.5rem;

	background-color: var(--purple-color);

	border-radius: 1rem;

	margin-right: 1rem;
`

export const PostTitle = styled.h3`
	font-weight: bold;

	color: var(--gray-color-15);
`

export const PostDescription = styled.h4`
	color: var(--gray-color-15);

	font-weight: normal;
`

export const PostDivider = styled.div`
	background-color: var(--gray-color-5);

	height: 1px;
	width: 100%;

	padding: 4rem 0;
`