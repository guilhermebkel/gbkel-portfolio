import styled from "styled-components"

import LazyLoadedImage from "@/components/LazyLoadedImage"

export const NavbarContainer = styled.div`
	width: 100%;
	height: var(--navbar-height);

	display: flex;
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;

	z-index: 4;
`

export const NavbarContent = styled.div`
	width: var(--section-content-fluid-max-width);
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	z-index: 2;
`

export const Logo = styled(LazyLoadedImage)`
	width: auto;
	height: 5rem;

	&:hover {
		animation: shake 0.7s ease-in-out; 

		@keyframes shake {
			0% { transform: rotate(0deg); }
			33% { transform: rotate(-30deg); }
			66% { transform: rotate(30deg); }
			100% { transform: rotate(0deg); }
		}
	}
`

export const Menu = styled.ul<{ isMobileMenuOpened: boolean }>`
	list-style-type: none;

	display: flex;
	align-items: center;
	flex-direction: ${(props) => props.isMobileMenuOpened ? "column" : "row"};
	justify-content: ${(props) => props.isMobileMenuOpened && "center"};

	position: ${(props) => props.isMobileMenuOpened && "fixed"};
	height: ${(props) => props.isMobileMenuOpened && "100%"};
	width: ${(props) => props.isMobileMenuOpened && "100%"};
	background-color: ${(props) => props.isMobileMenuOpened && "var(--gray-color-15)"};
	top: ${(props) => props.isMobileMenuOpened && 0};
	left: ${(props) => props.isMobileMenuOpened && 0};

	@media (min-width: 768px) {
		button {
			display: none;
		}
	}

	@media (max-width: 768px) {
		li {
			display: ${(props) => props.isMobileMenuOpened ? "flex" : "none"};
			margin: ${(props) => props.isMobileMenuOpened && 0};
			margin-bottom: ${(props) => props.isMobileMenuOpened && "2rem"};
		}

		#menu-icon-item {
			display: flex;
		}

		a {
			color: ${(props) => props.isMobileMenuOpened && "var(--gray-color-1)"};
		}

		button {
			position: ${(props) => props.isMobileMenuOpened && "absolute"};
			top: ${(props) => props.isMobileMenuOpened && "2.4rem"};
			right: ${(props) => props.isMobileMenuOpened && "2.2rem"};
		}

		img {
			filter: ${(props) => props.isMobileMenuOpened && "invert(0.9)"};
		}
	}

	transition: all 0.1s ease-in-out;
`

export const MenuItem = styled.li`
	margin-right: 3rem;

	&:last-child {
		margin-right: 0;
	}
`

export const MenuIconItem = styled.li`
`

export const MenuItemLink = styled.a``

export const LogoLink = styled.a`
	&::before {
		content: none;
	}
`

export const NavbarBackground = styled.div<{ isScrolling: boolean }>`
	position: absolute;

	top: 0;
	left: 0;

	background-color: var(--black-color-1);

	width: 100%;
	height: ${(props) => props.isScrolling ? "100%" : "0%"};

	transition: all 0.5s;

	z-index: 1;
`
