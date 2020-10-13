import React, { ImgHTMLAttributes, useState, useRef } from "react"

import {
	Image
} from "@/components/LazyLoadedImage/styles"

import { addEventListener } from "@/lib/window"

type LazyLoadedImageProps = ImgHTMLAttributes<Element>

const LazyLoadedImage: React.FC<LazyLoadedImageProps> = (props) => {
	const { src, alt, ...otherProps } = props

	const [loaded, setLoaded] = useState(false)

	const imageRef = useRef(null)

	const onImageLoad = () => {
		setLoaded(true)
	}

	addEventListener("load", () => {
		const imageElement = imageRef.current as Element

		const observer = new IntersectionObserver(callback => {
			const isImageVisible = callback?.[0]?.isIntersecting

			if (isImageVisible) {
				imageRef.current.src = src
				imageRef.current.alt = alt
			}
		})
	
		observer.observe(imageElement)
	})

	return (
		<Image
			ref={imageRef}
			onLoad={onImageLoad}
			loaded={loaded}
			{...otherProps}
		/>
	)
}

export default LazyLoadedImage
