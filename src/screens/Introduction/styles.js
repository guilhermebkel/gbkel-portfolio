import styled from "styled-components"

export const Content = styled.div`
	margin: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Background = styled.div`
 	display: flex;

  width: 100vw;
  height: 100vh;

	background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${({ image }) => image});
  background-position: center; 
  background-size: cover;
  background-attachment: fixed;

	@media only screen and (max-width: 576px) {
		background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${({ image }) => image});
		background-size: cover;
		background-attachment: fixed;
	}
`

export const Title = styled.h1`
	color: #FFF;

	font-size: 60px;
	text-align: center;
	line-height: 80px;
	font-display: fallback;

	margin: auto auto 30px auto;

	text-shadow: 2px 5px 20px rgba(0, 0, 0, 0.01);

	b {
		opacity: 0.9;
	}

	@media only screen and (max-width: 1600px) {
		font-size: 40px;
		line-height: 50px;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 45px;
		line-height: 55px;
	}

	@media only screen and (max-width: 768px) {
		font-size: 40px;
		line-height: 50px;
	}

	@media only screen and (max-width: 576px) {
		font-size: 25px;
		line-height: 30px;
		width: 80%;
	}
`

export const Description = styled(Title)`
	font-size: 40px;
	line-height: 50px;

	font-weight: normal;

	width: 70%;
`
