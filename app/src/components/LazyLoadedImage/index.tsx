import React, { ImgHTMLAttributes, useState } from "react"

import {
	Image
} from "@/components/LazyLoadedImage/styles"

import {
	LazyLoadedElement
} from "@/components"

type LazyLoadedImageProps = ImgHTMLAttributes<Element>

const LazyLoadedImage: React.FC<LazyLoadedImageProps> = (props) => {
	const { src, alt, ...otherProps } = props

	const [loaded, setLoaded] = useState(false)

	const onImageLoad = () => {
		setLoaded(true)
	}

	const onImageVisible = (imageRef: Element) => {
		imageRef["src"] = src
		imageRef["alt"] = alt
	}

	return (
		<LazyLoadedElement onVisible={onImageVisible}>
			<Image
				onLoad={onImageLoad}
				loaded={loaded}
				{...otherProps}
			/>
		</LazyLoadedElement>
	)
}

export default LazyLoadedImage
