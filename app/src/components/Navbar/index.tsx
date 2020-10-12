import React from "react"

import {
	NavbarContainer,
	NavbarContent,
	Logo,
	Menu,
	MenuItem,
	MenuItemLink
} from "@/components/Navbar/styles"

const Navbar: React.FC = () => {
	return (
		<NavbarContainer>
			<NavbarContent>
				<Logo
					src="/images/logo-white-transparent.png"
					loading="lazy"
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
		</NavbarContainer>
	)
}

export default Navbar
