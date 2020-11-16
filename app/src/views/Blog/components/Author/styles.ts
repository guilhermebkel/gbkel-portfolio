import styled from "styled-components"

import {
	LazyLoadedImage
} from "@/components" 

export const AuthorContainer = styled.div`
	display: flex;
	
	align-items: center;
`

export const Avatar = styled(LazyLoadedImage)`
	width: 48;
	height: 48;

	border-radius: 100%;

	margin-right: 1rem;
`

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;

	flex: 1;
`

export const AuthorName = styled.h2`
	color: var(--gray-color-14);

	margin-bottom: 0.5rem;
`

export const ExtraInfo = styled.small`
	color: var(--gray-color-14);
`