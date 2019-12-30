import styled from "styled-components"
import { Form } from "antd"

export const ContactForm = styled(Form)`
	max-width: 500px;
	width: 100%;

	background-color: #FFF;
	padding: 30px;

	box-shadow: 2px 5px 30px rgba(0, 0, 0, 0.05);

	margin: auto;
	border-radius: 5px;

	label {
		font-size: 16px;
	}

	input, textarea {
		color: #111;
		border: 1px solid #999;

		&:hover {
			border: 1px solid #333;
		}

		&:focus {
			border-color: #333;
			box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2)
		}
	}

	input::placeholder, textarea::placeholder {
		font-size: 15px;
		color: #666;
	}

	button {
		font-size: 15px;
		background-color: #333;
		border: 0;

		&:hover, &:focus {
			background-color: #111;
			border: 0;
		}
	}

	@media only screen and (max-width: 576px) {
		max-width: 300px;
	}
`
