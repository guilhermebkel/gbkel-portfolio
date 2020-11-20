import styled from "styled-components"

import {
	Section,
	LazyLoadedImage,
	PostInfo as PostInfoComponent
} from "@/components" 

export const PostSingleSectionContainer = styled(Section.Container)`
	margin-top: var(--section-container-margin-bottom);

	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const PostSingleSectionContent = styled(Section.Content)``

export const PostInfo = styled(PostInfoComponent)`
	max-width: 500px;

	margin-bottom: 10rem;
`

export const PostCover = styled(LazyLoadedImage)`
	width: 100%;
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

export const PostContent = styled.div`
	margin-top: 10rem;

	& > * {
		color: var(--gray-color-15);
	}
`
