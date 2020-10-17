import React from "react"

import {
	Icon,
	Link,
	Button
} from "@/components/IconButton/styles"

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
				width="24px"
				height="24px"
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
