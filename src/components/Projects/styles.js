import styled from "styled-components"

export const Container = styled.section`
	width: 100vw;
	height: 100vh;

	background-color: ${(props) => props.theme.primary};

	display: flex;
	justify-content: center;
	align-items: center;

	.ant-carousel .slick-slide {
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const Project = styled.div`
	max-width: 1100px;
	min-width: 900px;
	min-height: 300px;

	display: flex;
	flex-direction: row;

	user-select: none;
`

export const Column = styled.div`
	width: ${({ width }) => width};
	height: auto;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
`

export const TitleGroup = styled.div`
	display: flex;

	align-content: center;
	align-items: center;
`

export const ProjectIndex = styled.span`
	font-weight: bold;
	font-size: 16px;
	color: #FFF;
	opacity: 0.7;

	margin-right: 10px;
`

export const Title = styled.h1`
	color: #FFF;
	font-weight: bold;
	font-size: 70px;
	margin-bottom: 0;
	line-height: 65px;
`

export const Description = styled.span`
	font-size: 18px;
	color: #FFF;
`

export const Mockup = styled.div`
	width: 90%;
	height: 300px;

	box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
	border-radius: 5px;

	background: url(${({ image }) => image});
	background-position: center;
  background-size: cover;

	margin: 0 auto;
`

export const ExternalLink = styled.a`
	color: #FFF;
	font-weight: bold;
	font-size: 15px;

	svg {
		margin-right: 2px;
	}

	&:hover {
		color: #FFF;
		text-decoration: underline;
	}
`

export const SelectorGroup = styled.div`
	margin-top: 20px;

	display: flex;

	justify-content: space-between;

	padding: 0 50px;
`

export const Selector = styled.button`
	background: none;
	border: 0;
	outline: none;

	span {
		color: #FFF;
		font-size: 16px;
		font-weight: bold;
	}
	
	svg {
		color: #FFF;
		margin: 0 5px;
	}

	transition: opacity 0.15s ease-in-out;
	opacity: 0.7;

	&:hover {
		transition: opacity 0.15s ease-in-out;
		opacity: 1;
	}
`