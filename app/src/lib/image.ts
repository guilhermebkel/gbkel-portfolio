import { imageConfig } from "@/config/image"
import { environmentConfig } from "@/config/environment"
import { urlConfig } from "@/config/url"

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

export const buildImageShareSrc = (path: string): string => {
	if (environmentConfig.isDev) {
		return path
	}

	const { baseUrl } = urlConfig

	const sharingSize = imageConfig.responsiveSizes.find(size => size > 500)

	const [fullPath, extension] = path.split(".")

	const sharingPath = sharingSize ? (
		imageConfig.buildResponsiveSrc(fullPath, sharingSize, extension)
	) : (
		path
	)

	const imageShareSrc = `${baseUrl}${sharingPath}`

	return imageShareSrc
}
