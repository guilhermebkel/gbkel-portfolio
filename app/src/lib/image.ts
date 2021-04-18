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
	
	const cdnUrlWithoutExtension = buildCDNUrl(fullPath)
	const cdnUrl = buildCDNUrl(path)
	
	const srcList = imageConfig.responsiveSizes.map(size => (
		`${imageConfig.buildResponsiveSrc(cdnUrlWithoutExtension, size, extension)} ${size}w`
	))

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
	
	const cdnUrlWithoutExtension = buildCDNUrl(fullPath)
	const cdnUrl = buildCDNUrl(path)

	const sharePath = sharingSize ? (
		imageConfig.buildResponsiveSrc(cdnUrlWithoutExtension, sharingSize, extension)
	) : (
		cdnUrl
	)

	return sharePath
}
