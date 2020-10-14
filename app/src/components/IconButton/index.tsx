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

	if (onClick) {
		return (
			<Button onClick={onClick}>
				<Icon src={src} alt={alt || "icon"} />
			</Button>
		)
	}

	return (
		<Link href={href} target={target || "_blank"}>
			<Icon src={src} alt={alt || "icon"} />
		</Link>
	)
}

export default IconButton
