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

	@media only screen and (max-width: 576px) {
		margin: auto;
		max-width: 300px;
		padding: 10px 20px 15px 20px;
	}
`
