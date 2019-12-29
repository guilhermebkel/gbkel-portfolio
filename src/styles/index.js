import styled from "styled-components"

export const ExternalLink = styled.a`
	color: #FFF;
	font-weight: bold;
	font-size: 15px;
	display: inline-block;
	vertical-align: middle;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	position: relative;
	overflow: hidden;

	&:hover {
		color: #FFF;
	}

	svg {
		margin-right: 2px;
	}

	@media only screen and (max-width: 992px) {
		margin: auto;
	}

	&:before {
		content: "";
		position: absolute;
		z-index: -1;
		left: 0;
		right: 100%;
		bottom: 0;
		background: #FFF;
		height: 2px;
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
`