import React, { HTMLAttributes, useRef } from "react"

import {
	Container
} from "@/components/LazyLoadedElement/styles"

import useDidMount from "@/hooks/useDidMount"
import useCallbackPool from "@/hooks/useCallbackPool"

type LazyLoadedElementProps = HTMLAttributes<HTMLDivElement> & {
	onVisible?: (elementRef: Element) => void
	threshold?: number
}

const LazyLoadedElement: React.FC<LazyLoadedElementProps> = (props) => {
	const {
		onVisible,
		threshold,
		children,
		...otherProps
	} = props

	const childrenRef = useRef(null)

	const { addToCallbackPool } = useCallbackPool()

	useDidMount(() => {
		const element = childrenRef.current as Element

		const observer = new IntersectionObserver(callback => {
			const isImageVisible = callback?.[0]?.isIntersecting

			if (isImageVisible) {
				addToCallbackPool(() => {
					onVisible?.(element)

					observer.unobserve(element)
				})
			}
		}, {
			threshold
		})
	
		observer.observe(element)
	})

	const totalChildren = React.Children.count(children)

	if (totalChildren > 1) {
		return (
			<Container
				ref={childrenRef}
				{...otherProps}
			>
				{children}
			</Container>
		)
	}

	return (
		<Container
			{...otherProps}
		>
			{
				React.cloneElement(children as React.ReactElement, {
					ref: childrenRef
				})
			}
		</Container>
		
	)
}

export default LazyLoadedElement
