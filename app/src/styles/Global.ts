import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	:root {
		--gray-color-1: #151515;
		--gray-color-2: #2C2C2C;
		--gray-color-3: #3B3B3B;
		--gray-color-4: #4C4C4C;
		--gray-color-5: #5B5B5B;
		--gray-color-6: #6B6B6B;
		--gray-color-7: #7A7A7A;
		--gray-color-8: #898989;
		--gray-color-9: #9A9A9A;
		--gray-color-10: #AAAAAA;
		--gray-color-11: #B9B9B9;
		--gray-color-12: #C8C8C8;
		--gray-color-13: #D7D7D7;
		--gray-color-14: #F2F2F2;
		--gray-color-15: #FFFFFF;

    --black-color-1: #252525;
    --black-color-2: #7F8084;
    --black-color-3: #D7D8DA;
    --black-color-4: #F3F3F3;

		--purple-color: #5328FE;
		
		--section-content-boxed-max-width: 1366px;
		--section-content-fluid-max-width: 90%;
		--section-content-mobile-margin: 2rem;
		--section-container-margin-bottom: 20rem;
		--section-content-items-margin: 5rem 0;

		--navbar-height: 8rem;
	}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
		height: 100%;
		
		font-size: 8px;
  }

	body {
		background-color: var(--gray-color-1);

		background-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.1rem), rgba(255,255,255,0.05) 50%, rgba(0,0,0,0) calc(50% + 0.1rem), rgba(0,0,0,0) 100%);
		background-size: 37.5rem;

		@media (max-width: 768px) {
			background-size: 11.2rem;
		}
	}

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Ubuntu', sans-serif;
	}
	
	h1 {
		font-size: 6.25rem;
		font-weight: 700;
		color: var(--black-color-1);
	}

	h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--black-color-1);
	}

	h3 {
		font-size: 3.25rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	h4 {
		font-size: 2rem;
		font-weight: 500;
		color: var(--black-color-1);
	}

	p {
		font-size: 2rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	small {
		font-size: 1.75rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	button {
		font-size: 2rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	a {
		text-decoration: none;

		font-weight: 400;
		font-size: 2rem;

		padding-right: 1rem;

		line-height: 3rem;

		color: var(--gray-color-15);

		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;
		overflow: hidden;

		@media (min-width: 768px) {
			&:hover {
				color: var(--gray-color-15);
			}

			&:before {
				content: "";
				position: absolute;
				z-index: -1;
				left: 0;
				right: 100%;
				bottom: 0;
				height: 1.4rem;

				background: var(--purple-color);

				-webkit-transition-property: right;
				transition-property: right;
				-webkit-transition-duration: 0.3s;
				transition-duration: 0.3s;
				-webkit-transition-timing-function: ease-out;
				transition-timing-function: ease-out;
			}

			&:hover:before, &:focus:before, &:active:before {
				right: 0;
			}
		}
	}

	@media (max-width: 768px) {
		:root {
			--section-container-margin-bottom: 10rem;
		}
	}
`;
