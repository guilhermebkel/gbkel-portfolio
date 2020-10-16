import React, { useState, useRef } from "react"

import {
	SpotlightContent
} from "@/components/Spotlight/styles"

import {
	LazyLoadedElement
} from "@/components"

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

	const [visible, setVisible] = useState(false)
	const spotlightRef = useRef(null)

	const onSpotlightVisible = () => {
		setVisible(true)
	}

	return (
		<LazyLoadedElement
			onVisible={onSpotlightVisible}
			threshold={1}
		>
			<SpotlightContent
				bottom={bottom}
				left={left}
				right={right}
				top={top}
				height={height}
				width={width}
				visible={visible}
				ref={spotlightRef}
			>
				{children}
			</SpotlightContent>
		</LazyLoadedElement>
	)
}

export default Spotlight
