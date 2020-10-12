import styled from "styled-components"
import Link from "next/link"

export const NavbarContainer = styled.div`
	width: 100%;
	height: var(--navbar-height);

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 0;
	left: 0;

	z-index: 3;
`

export const NavbarContent = styled.div`
	width: var(--context-fluid-max-width);
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Logo = styled.img`
	width: auto;
	height: 5rem;

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

export const Menu = styled.ul`
	list-style-type: none;

	display: flex;
	align-items: center;
`

export const MenuItem = styled.li`
	margin-right: 3rem;

	&:last-child {
		margin-right: 0;
	}
`

export const MenuItemLink = styled(Link)``
