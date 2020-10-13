import React, { useState, useRef } from "react"

import {
	SpotlightContent
} from "@/components/Spotlight/styles"

import useDidMount from "@/hooks/useDidMount"

export type SpotlightProps = {
	bottom?: string
	left?: string
	right?: string
	top?: string
	width?: string
	height?: string
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
	const {
		children,
		bottom,
		left,
		right,
		top,
		height,
		width
	} = props

	const [isVisible, setIsVisible] = useState(false)
	const spotlightRef = useRef(null)

	useDidMount(() => {
		const spotlightElement = spotlightRef.current as Element

		const observer = new IntersectionObserver(callback => {
			const isSpotlightVisible = callback?.[0]?.isIntersecting
	
			if (isSpotlightVisible) {
				setIsVisible(true)
	
				observer.unobserve(spotlightElement)
			}
		})
	
		observer.observe(spotlightElement)
	})

	return (
		<SpotlightContent
			bottom={bottom}
			left={left}
			right={right}
			top={top}
			height={height}
			width={width}
			isVisible={isVisible}
			ref={spotlightRef}
		>
			{children}
		</SpotlightContent>
	)
}

export default Spotlight
