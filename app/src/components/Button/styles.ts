import styled from "styled-components"

export const PureButton = styled.button`
	background: none;

	position: relative;

	cursor: pointer;

	color: var(--gray-color-15);

	padding: 0 2rem;

	line-height: 5rem;

	border-bottom: 2px solid var(--gray-color-15);

	&::before {
		content: "";

		position: absolute;

		width: 100%;
		bottom: 0;
		left: 0;
		height: 0px;

		background-color: var(--gray-color-15);

		transition: all 0.25s;

		z-index: -1;
	}

	&:hover {
		&::before {
			height: 100%;
		}

		color: var(--gray-color-1);
	}

	transition: all 0.25s;
`

export const PureLink = styled.a`
	&::before {
		content: none;
	}
`