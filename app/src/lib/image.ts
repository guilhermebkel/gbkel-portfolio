import { imageConfig } from "@/config/image"
import { environmentConfig } from "@/config/environment"

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

	const srcList = imageConfig.responsiveSizes.map(size => (
		`${imageConfig.buildResponsiveSrc(fullPath, size, extension)} ${size}w`
	))

	srcList.push(`${path} 1000w`)

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
