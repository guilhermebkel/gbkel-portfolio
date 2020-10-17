import styled from "styled-components"

import { LazyLoadedImage } from "@/components"

export const Button = styled.button`
	background: none;

	cursor: pointer;
`

export const Link = styled.a`
	line-height: 2rem;
`

export const Icon = styled(LazyLoadedImage)`
	width: 3rem;
	height: 3rem;
`