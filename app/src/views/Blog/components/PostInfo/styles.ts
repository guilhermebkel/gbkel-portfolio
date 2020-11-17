import styled from "styled-components"

import {
	LazyLoadedImage
} from "@/components"

export const PostInfoContainer = styled.div`
	display: flex;
	flex-direction: column;

	& > * {
		margin-bottom: 2rem;

		&:last-child {
			margin-bottom: 0;
		}
	}

	@media (max-width: 768px) {
		& > * {
			margin-bottom: 1rem;
		}
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
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 1.75rem;
		padding: 0rem 1rem;
	}
`

export const PostTitle = styled.h3`
	font-weight: bold;

	color: var(--gray-color-15);

	line-height: 4rem;

	@media (max-width: 768px) {
		font-size: 3rem;
	}
`

export const PostDescription = styled.h4`
	color: var(--gray-color-15);

	font-weight: normal;

	line-height: 3rem;

	@media (max-width: 768px) {
		font-size: 1.75rem;
	}
`

export const PostAuthorContainer = styled.div`
	display: flex;
	
	align-items: center;
`

export const Avatar = styled(LazyLoadedImage)`
	width: 48px;
	height: 48px;

	border-radius: 100%;

	margin-right: 1rem;
`

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;

	flex: 1;
`

export const PostAuthorName = styled.h2`
	color: var(--gray-color-14);

	margin-bottom: 0.5rem;
`

export const ExtraInfo = styled.small`
	color: var(--gray-color-14);
`