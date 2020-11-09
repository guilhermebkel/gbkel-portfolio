import React, { ImgHTMLAttributes } from "react"

import {
	PureIcon
} from "@/components/Icon/styles"

type IconProps = ImgHTMLAttributes<Element> & {
	src: string
	alt?: string
}

const Icon: React.FC<IconProps> = (props) => {
	const { src, alt, ...options } = props

	return (
		<PureIcon
			{...options}
			src={src}
			alt={alt || "icon"}
			width="24px"
			height="24px"
		/>
	)
}

export default Icon
