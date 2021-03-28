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

export const PostSingleSectionContent = styled(Section.Content)`
	display: flex;
	flex-direction: column;
`

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
	margin-top: 5rem;

	max-width: 90rem;
	width: 100%;

	align-self: center;

	& > * {
		color: var(--gray-color-15);
		text-align: justify;
	}

	img {
		width: 100%;
		height: 100%;

		max-width: 80rem;
		max-height: 60rem;

		object-fit: cover;
		object-position: center;
	}

	figure {
		width: 100%;

		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		padding: 3rem 0%;

		figcaption {
			color: #ADADAD;
			font-size: 1.8rem;
			font-style: italic;

			padding-top: 1rem;
		}
	}

	a[data-fancybox]:before {
		cursor: zoom-in;
	}

	p {
		line-height: 3rem;
		margin-top: 2rem;
	}

	h1 {
		margin-top: 6rem;

		font-weight: bolder;
	}

	h2 {
		margin-top: 4rem;

		font-size: 3rem;
		font-weight: bolder;
	}

	blockquote {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		p {
			color: var(--gray-color-15);
			font-size: 2.5rem;
			padding: 1.5rem 0;
			background: var(--purple-color);
			padding: 2rem;
			border-radius: 0.5rem;
		}
	}

	ul {
		li {
			text-align: left;
			font-size: 2rem;
			font-weight: bold;

			padding-top: 2rem;

			& > * {
				font-size: 2rem;
			}
		}
	}

	a {
		color: #9479FF;
		
		&:before {
			content: none;
		}
	}

	pre {
    background: var(--gray-color-2);
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
		margin: 1rem 0;

		& code {
			border-radius: 0.5rem;
			border: 1px solid var(--gray-color-5);
			position: relative;

			display: block;
			padding: 2rem;
			overflow-x: auto;
			font-size: 1.8rem;
			line-height: 2.2rem;
			color: var(--gray-color-13);
		}
	}
`
