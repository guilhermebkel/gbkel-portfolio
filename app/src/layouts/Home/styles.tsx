import styled from "styled-components"

export const HomeContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: var(--gray-color-1);

	z-index: -2;

	background-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.1rem), rgba(255,255,255,0.05) 50%, rgba(0,0,0,0) calc(50% + 0.1rem), rgba(0,0,0,0) 100%);
	background-size: 37.5rem;

	@media (max-width: 768px) {
		#wave {
			display: none;
		}

		background-size: 11.2rem;
	}
`
