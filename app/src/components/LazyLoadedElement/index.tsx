import React, { HTMLAttributes, useRef, useState } from "react"

import {
	Container
} from "@/components/LazyLoadedElement/styles"

import useDidMount from "@/hooks/useDidMount"
import useCallbackPool from "@/hooks/useCallbackPool"

type LazyLoadedElementProps = HTMLAttributes<HTMLDivElement> & {
	onVisible?: (elementRef: Element, childrenRef: Element) => void
	threshold?: number
	initInvisible?: boolean
}

const LazyLoadedElement: React.FC<LazyLoadedElementProps> = (props) => {
	const {
		onVisible,
		threshold,
		children,
		initInvisible,
		...otherProps
	} = props

	const childrenRef = useRef(null)
	const containerRef = useRef(null)

	const [visible, setVisible] = useState(!initInvisible)

	const { addToCallbackPool } = useCallbackPool()

	useDidMount(() => {
		const containerElement = containerRef.current as Element
		const childrenElement = childrenRef.current as Element

		const observer = new IntersectionObserver(callback => {
			const isImageVisible = callback?.[0]?.isIntersecting

			if (isImageVisible) {
				addToCallbackPool(() => {
					onVisible?.(containerElement, childrenElement)

					setVisible(true)

					observer.unobserve(containerElement)
				})
			}
		}, {
			threshold
		})
	
		observer.observe(containerElement)
	})

	return (
		<Container
			ref={containerRef}
			visible={visible}
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
