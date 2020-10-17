import React from "react"

import {
	Icon,
	Link,
	Button
} from "@/components/IconButton/styles"

import { buildCDNUrl } from "@/lib/cdn"

type IconButtonProps = {
	src: string
	target?: string
	href?: string
	alt?: string
	onClick?: () => void
}

const IconButton: React.FC<IconButtonProps> = (props) => {
	const { src, href, target, alt, onClick } = props

	const iconSrc = buildCDNUrl(src)

	const content = (
		<Button>
			<Icon
				src={iconSrc}
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
