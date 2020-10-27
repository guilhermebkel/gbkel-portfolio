import React from "react"

import {
	PureIcon
} from "@/components/Icon/styles"

type IconProps = {
	src: string
	alt?: string
}

const Icon: React.FC<IconProps> = (props) => {
	const { src, alt } = props

	return (
		<PureIcon
			src={src}
			alt={alt || "icon"}
			width="24px"
			height="24px"
		/>
	)
}

export default Icon
