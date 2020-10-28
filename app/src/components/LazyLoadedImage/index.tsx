import React, { ImgHTMLAttributes, useState } from "react"

import {
	Image
} from "@/components/LazyLoadedImage/styles"

import {
	LazyLoadedElement
} from "@/components"

import { buildCDNUrl } from "@/lib/cdn"
import { buildSrcSet } from "@/lib/image"

type LazyLoadedImageProps = ImgHTMLAttributes<Element> & {
	highPriority?: boolean
}

const LazyLoadedImage: React.FC<LazyLoadedImageProps> = (props) => {
	const { src, highPriority, ...otherProps } = props

	const [loaded, setLoaded] = useState(false)

	const onImageLoad = () => {
		setLoaded(true)
	}

	const onImageVisible = (_: Element, imageRef: Element) => {
		if (!imageRef["src"]) {
			imageRef["srcset"] = buildSrcSet(src)
			imageRef["sizes"] = "(max-width: 768px) 50vw, 100vw"
			imageRef["src"] = buildCDNUrl(src)
		}
	}

	return (
		<LazyLoadedElement
			onVisible={onImageVisible}
			highPriority={highPriority}
			{...otherProps}
		>
			<Image
				onLoad={onImageLoad}
				loaded={loaded}
				{...otherProps}
			/>
		</LazyLoadedElement>
	)
}

export default LazyLoadedImage
