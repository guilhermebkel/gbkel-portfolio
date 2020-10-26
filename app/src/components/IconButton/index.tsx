import React from "react"

import {
	Link,
	Button
} from "@/components/IconButton/styles"

import {
	Icon
} from "@/components"

type IconButtonProps = {
	src: string
	target?: string
	href?: string
	alt?: string
	onClick?: () => void
}

const IconButton: React.FC<IconButtonProps> = (props) => {
	const { src, href, target, alt, onClick } = props

	const content = (
		<Button onClick={onClick}>
			<Icon
				src={src}
				alt={alt || "icon"}
			/>
		</Button>
	)

	if (onClick) {
		return content
	}

	return (
		<Link
			href={href}
			target={target || "_blank"}
			rel="noopener"
		>
			{content}
		</Link>
	)
}

export default IconButton
