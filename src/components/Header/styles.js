import styled from "styled-components"

export const Container = styled.nav`
	position: fixed;
	top: 0;

	width: 100vw;
	height: 70px;

	display: flex;
	align-content: center;
	justify-content: space-between;
	align-items: center;

	margin-top: 40px;
	padding: 0 50px;

	z-index: 150;
`

export const Logo = styled.img`
	width: 25px;
	height: auto;
	cursor: pointer;

	&:hover {
		animation: shake 0.5s ease-in-out; 

		@keyframes shake {
			0% { transform: rotate(0deg); }
			33% { transform: rotate(-30deg); }
			66% { transform: rotate(30deg); }
			100% { transform: rotate(0deg); }
		}
	}
`
