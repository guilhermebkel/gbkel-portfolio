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

import { addEventListener } from "@/lib/window"

const Navbar: React.FC = () => {
	const [isScrolling, setIsScrolling] = useState(false)

	addEventListener("scroll", () => {
		if (window.pageYOffset === 0) {
			setIsScrolling(false)
		} else {
			setIsScrolling(true)
		}
	})

	return (
		<NavbarContainer>
			<NavbarContent>
				<Logo
					src="/images/logo-white-transparent.png"
					alt="logo"
				/>
				
				<Menu>
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
