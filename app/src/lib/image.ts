import { imageConfig } from "@/config/image"
import { environmentConfig } from "@/config/environment"

export const buildSrcSet = (path: string): string => {
	if (environmentConfig.isDev) {
		return ""
	}

	const [fullPath, extension] = path.split(".")

	const srcList = imageConfig.responsiveSizes.map(size => (
		`${imageConfig.buildResponsiveSrc(fullPath, size, extension)} ${size}w`
	))

	const srcSet = srcList.join(", ")

	return srcSet
}
