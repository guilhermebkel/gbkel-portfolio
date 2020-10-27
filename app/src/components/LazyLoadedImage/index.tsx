import React, { ImgHTMLAttributes, useState } from "react"

import {
	Image
} from "@/components/LazyLoadedImage/styles"

import { buildCDNUrl } from "@/lib/cdn"

type LazyLoadedImageProps = ImgHTMLAttributes<Element>

const LazyLoadedImage: React.FC<LazyLoadedImageProps> = (props) => {
	const { src, ...otherProps } = props

	const [loaded, setLoaded] = useState(false)

	const onImageLoad = () => {
		setLoaded(true)
	}

	return (
		<Image
			src={buildCDNUrl(src)}
			onLoad={onImageLoad}
			loaded={loaded}
			{...otherProps}
		/>
	)
}

export default LazyLoadedImage
