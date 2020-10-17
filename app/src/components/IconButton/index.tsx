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

	if (onClick) {
		return (
			<Button onClick={onClick}>
				<Icon src={iconSrc} alt={alt || "icon"} />
			</Button>
		)
	}

	return (
		<Link
			href={href}
			target={target || "_blank"}
			rel="noopener"
		>
			<Button>
				<Icon src={iconSrc} alt={alt || "icon"} />
			</Button>
		</Link>
	)
}

export default IconButton
