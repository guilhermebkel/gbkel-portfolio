import React, { useState } from "react"

import {
	LoadingContainer,
	Logo
} from "@/components/Loading/styles"

import { environmentConfig } from "@/config/environment"

const Navbar: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(environmentConfig.isDev)

	setTimeout(() => {
		setIsLoaded(true)
	}, 2000)

	return (
		<LoadingContainer isLoaded={isLoaded}>
			<Logo
				src="/images/logo-white-transparent.png"
				alt="logo"
			/>
		</LoadingContainer>
	)
}

export default Navbar
