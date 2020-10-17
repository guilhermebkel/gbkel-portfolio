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

	if (onClick) {
		return (
			<PureButton onClick={onClick}>
				{children}
			</PureButton>
		)
	}

	return (
		<PureLink
			href={href}
			target={target || "_blank"}
			rel="noopener"
		>
			<PureButton>
				{children}
			</PureButton>
		</PureLink>
	)
}

export default Button
