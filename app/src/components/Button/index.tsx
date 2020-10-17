import React from "react"

import {
	PureLink,
	PureButton
} from "@/components/Button/styles"

type ButtonProps = {
	target?: string
	href?: string
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
	const { href, target, onClick, children } = props

	const content = (
		<PureButton onClick={onClick}>
			{children}
		</PureButton>
	)

	if (onClick) {
		return content
	}

	return (
		<PureLink
			href={href}
			target={target || "_blank"}
			rel="noopener"
		>
			{content}
		</PureLink>
	)
}

export default Button
