import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
		height: 100%;
		
		font-size: 16px;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Ubuntu', sans-serif;
	}

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
		
		--max-container-width: 1366px;
	}
	
	h1 {
		font-size: 3.125rem;
		font-weight: 700;
		color: var(--black-color-1);
	}

	h2 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--black-color-1);
	}

	h3 {
		font-size: 1.625rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	h4 {
		font-size: 1rem;
		font-weight: 500;
		color: var(--black-color-1);
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	small {
		font-size: 0.875rem;
		font-weight: 400;
		color: var(--black-color-1);
	}

	button {
		font-size: 1rem;
		font-weight: 400;
		color: var(--black-color-1);
	}
`;
