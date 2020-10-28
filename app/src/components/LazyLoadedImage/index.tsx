import React, { ImgHTMLAttributes, useState } from "react"

import {
	Image
} from "@/components/LazyLoadedImage/styles"

import {
	LazyLoadedElement
} from "@/components"

import { buildCDNUrl } from "@/lib/cdn"
import { buildSrcSet } from "@/lib/image"

type LazyLoadedImageProps = ImgHTMLAttributes<Element>

const LazyLoadedImage: React.FC<LazyLoadedImageProps> = (props) => {
	const { src, alt, ...otherProps } = props

	const [loaded, setLoaded] = useState(false)

	const onImageLoad = () => {
		setLoaded(true)
	}

	const onImageVisible = (_: Element, imageRef: Element) => {
		if (!imageRef["src"]) {
			imageRef["src"] = buildCDNUrl(src)
			imageRef["srcset"] = buildSrcSet(src)
			imageRef["sizes"] = "100vw"
		}

		imageRef["alt"] = alt
	}

	return (
		<LazyLoadedElement
			onVisible={onImageVisible}
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
