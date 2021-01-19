import React, { HTMLAttributes, useRef, useState } from "react"

import {
	Container
} from "@/components/LazyLoadedElement/styles"

import useDidMount from "@/hooks/useDidMount"
import useCallbackPool from "@/hooks/useCallbackPool"

import { getClientDeviceInfo } from "@/lib/device"

type LazyLoadedElementProps = HTMLAttributes<HTMLDivElement> & {
	onVisible?: (elementRef: Element, childrenRef: Element) => void
	threshold?: number
	initInvisible?: boolean
	mountPureOnVisible?: boolean
	highPriority?: boolean
}

const LazyLoadedElement: React.FC<LazyLoadedElementProps> = (props) => {
	const {
		onVisible,
		threshold,
		children,
		initInvisible,
		mountPureOnVisible,
		highPriority,
		...otherProps
	} = props

	const childrenRef = useRef(null)
	const containerRef = useRef(null)

	const [visible, setVisible] = useState(!initInvisible)

	const { addToCallbackPool } = useCallbackPool()

	useDidMount(async () => {
		const containerElement = containerRef.current as Element
		const childrenElement = childrenRef.current as Element

		const visibilityWorker = () => {
			onVisible?.(containerElement, childrenElement)

			setVisible(true)
		}

		const { isSafari } = await getClientDeviceInfo()

		/**
		 * In case the current browser is Safari, we avoid using lazy loading with
		 * IntersectionObserver, since it causes a bug of no render.
		 */
		if (isSafari) {
			visibilityWorker()
		} else {
			const observer = new IntersectionObserver(callback => {
				const isContainerVisible = callback?.[0]?.isIntersecting
	
				if (isContainerVisible) {
					const observerVisibilityWorker = () => {
						visibilityWorker()
	
						observer.unobserve(containerElement)
					}
	
					if (highPriority) {
						observerVisibilityWorker()
					} else {
						addToCallbackPool(observerVisibilityWorker)
					}
				}
			}, {
				threshold
			})
		
			observer.observe(containerElement)
		}
	})

	return (
		<Container
			ref={containerRef}
			visible={visible}
			{...otherProps}
		>
			{mountPureOnVisible ? (
				visible && (
					children
				)
			) : (
				React.cloneElement(children as React.ReactElement, {
					ref: childrenRef
				})
			)}
		</Container>
	)
}

export default LazyLoadedElement
