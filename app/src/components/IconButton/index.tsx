import React from "react"

import {
	Icon,
	IconLink
} from "@/components/IconButton/styles"

type IconButtonProps = {
	src: string
	target?: string
	href: string
	alt?: string
}

const IconButton: React.FC<IconButtonProps> = (props) => {
	const { src, href, target, alt } = props

	return (
		<IconLink href={href} target={target || "_blank"}>
			<Icon src={src} alt={alt || "icon"} />
		</IconLink>
	)
}

export default IconButton
