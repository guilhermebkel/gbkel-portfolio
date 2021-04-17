import { imageConfig } from "@/config/image"
import { environmentConfig } from "@/config/environment"

import { buildCDNUrl } from "@/lib/cdn"

export const buildSrcSet = (path: string): string => {
	if (environmentConfig.isDev) {
		return ""
	}

	const [fullPath, extension] = path.split(".")

	const isOptimizedPicture = imageConfig.validPictureExtensions
		.some(validExtension => validExtension.includes(extension))

	if (!isOptimizedPicture) {
		return ""
	}
	
	const srcList = imageConfig.responsiveSizes.map(size => {
		const cdnUrl = buildCDNUrl(fullPath)

		return `${imageConfig.buildResponsiveSrc(cdnUrl, size, extension)} ${size}w`
	})
	
	const cdnUrl = buildCDNUrl(path)

	srcList.push(`${cdnUrl} 1000w`)

	const srcSet = srcList.join(", ")

	return srcSet
}

export const buildImageSharePath = (path: string): string => {
	if (environmentConfig.isDev) {
		return path
	}

	const sharingSize = imageConfig.responsiveSizes.find(size => size > 300)

	const [fullPath, extension] = path.split(".")

	const sharePath = sharingSize ? (
		imageConfig.buildResponsiveSrc(fullPath, sharingSize, extension)
	) : (
		path
	)

	return sharePath
}
