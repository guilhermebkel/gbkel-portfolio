import React, { useState } from "react"

import {
	NavbarContainer,
	NavbarContent,
	Logo,
	Menu,
	MenuItem,
	MenuItemLink,
	NavbarBackground
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
					width="27px"
					height="40px"
				/>
				
				<Menu
					isMobileMenuOpened={isMobileMenuOpened}
				>
					<IconButton
						onClick={toggleMobileMenu}
						src="/icons/menu.svg"
					/>

					<MenuItem>
						<MenuItemLink href="/">
							Home
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink href="#about">
							About
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink href="#timeline">
							Timeline
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink href="#contact">
							Contact
						</MenuItemLink>
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
