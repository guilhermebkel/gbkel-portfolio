import React, { useState } from "react"

import {
	NavbarContainer,
	NavbarContent,
	Logo,
	Menu,
	MenuItem,
	MenuItemLink,
	NavbarBackground,
	MenuIconItem
} from "@/components/Navbar/styles"

import {
	IconButton
} from "@/components"

import useDidMount from "@/hooks/useDidMount"

const Navbar: React.FC = () => {
	const [isScrolling, setIsScrolling] = useState(false)

	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpened(lastState => !lastState)
	}

	useDidMount(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset === 0) {
				setIsScrolling(false)
			} else {
				setIsScrolling(true)
			}
		})
	})

	return (
		<NavbarContainer>
			<NavbarContent>
				<Logo
					src="/images/logo-white-transparent.png"
					alt="logo"
					width="26px"
					height="40px"
				/>
				
				<Menu
					isMobileMenuOpened={isMobileMenuOpened}
				>
					<MenuIconItem id="menu-icon-item">
						<IconButton
							onClick={toggleMobileMenu}
							src="/icons/menu.svg"
						/>
					</MenuIconItem>

					<MenuItem>
						<MenuItemLink href="/">
							Home
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<a
							href="https://about.guilherr.me"
							target="_blank"
							rel="noreferrer"
						>
							About
						</a>
					</MenuItem>
					<MenuItem>
						<MenuItemLink href="/blog">
							Blog
						</MenuItemLink>
					</MenuItem>
				</Menu>
			</NavbarContent>

			<NavbarBackground isScrolling={isScrolling} />
		</NavbarContainer>
	)
}

export default Navbar
