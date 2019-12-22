import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'

export const Container = styled.div`
	width: 100vw;
	height: 70px;

	display: flex;
	align-content: center;
	justify-content: space-between;
	align-items: center;

	margin-top: 40px;
	padding: 0 50px;

	float: right;
`

export const Logo = styled.img`
	width: 25px;
	height: auto;
`

export const Menu = styled(MenuIcon)`
	color: #fff;
	font-size: 30px;
`
