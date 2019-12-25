import styled from "styled-components"

export const Container = styled.footer`
	position: fixed;
	bottom: 0;

	width: 100vw;
	height: 60px;

	display: flex;
	align-content: center;
	justify-content: space-between;
	align-items: center;

	padding: 0 50px;
	
	z-index: 150;
`

export const Languages = styled.div`
	color: #FFF;
	font-size: 15px;

	@media only screen and (max-width: 576px) {
		display: none;
	}
`

export const SocialMedias = styled.div`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 576px) {
		width: 100%;
	}
`

export const SocialLink = styled.a`
	padding: 8px;
	transition: transform 0.05s ease-in-out;

	&:hover {
		transform: scale(1.25);
	}
`;