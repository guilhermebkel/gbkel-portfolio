import React, { useState } from "react"

import {
	NavbarContainer,
	NavbarContent,
	Logo,
	Menu,
	MenuItem,
	NavbarBackground,
	MenuIconItem,
	MenuItemLink,
	LogoLink
} from "@/components/Navbar/styles"

import {
	IconButton
} from "@/components"

import { appUrls } from "@/lib/personal"

import useDidMount from "@/hooks/useDidMount"

const Navbar: React.FC = () => {
	const [isScrolling, setIsScrolling] = useState(false)

	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpened(lastState => !lastState)
	}

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpened(false)
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
				<LogoLink
					href={appUrls.home}
					target="_self"
					rel="noreferrer"
				>
					<Logo
						src="/images/logo-white-transparent.png"
						alt="logo"
						width="26px"
						height="40px"
					/>
				</LogoLink>

				<Menu
					isMobileMenuOpened={isMobileMenuOpened}
					onClick={isMobileMenuOpened ? handleCloseMobileMenu : undefined}
				>
					<MenuIconItem id="menu-icon-item">
						<IconButton
							onClick={toggleMobileMenu}
							src="/icons/menu.svg"
						/>
					</MenuIconItem>

					<MenuItem>
						<MenuItemLink
							href={appUrls.home}
							target="_self"
							rel="noreferrer"
						>
							Home
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink
							href={appUrls.about}
							target="_blank"
							rel="noreferrer"
						>
							About
						</MenuItemLink>
					</MenuItem>
					<MenuItem>
						<MenuItemLink
							href={appUrls.blog}
							target="_self"
							rel="noreferrer"
						>
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
