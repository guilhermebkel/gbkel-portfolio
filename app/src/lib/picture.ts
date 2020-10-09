import path from "path"
import sharp from "sharp"
import fs from "fs"

const ASSETS_FOLDER_PATH = path.join(process.cwd(), "src", "assets")

export type ResizePictureAssetOptions = {
	width?: number
	height?: number
	assetKey: string
}

export const optimizePictureAsset = async (
	options: ResizePictureAssetOptions
): Promise<Buffer> => {
	const picturePath = path.join(ASSETS_FOLDER_PATH, options.assetKey)

	const picture = await fs.promises.readFile(picturePath)

	const optimizedPicture = await sharp(picture)
		.resize(options.width, options.height)
		.toBuffer()

	return optimizedPicture
}

export type OptimizedPublicPictureUrlOptions = ResizePictureAssetOptions & {
	baseURL?: string
}

export const optimizedPublicPictureUrl = (
	options: OptimizedPublicPictureUrlOptions
) => {
	const { baseURL, ...resizeOptions } = options

	const params = []

	Object.entries(resizeOptions).forEach(([key, value]) => {
		params.push(`${key}=${value}`)
	})

	const queryParams = params.join("&")

	const optimizedPublicPictureUrlPath = `api/optimized-picture?${queryParams}`

	let optimizedPublicPictureUrl: string

	if (baseURL) {
		optimizedPublicPictureUrl = `${baseURL}/${optimizedPublicPictureUrlPath}`
	} else {
		optimizedPublicPictureUrl = optimizedPublicPictureUrlPath
	}

	return optimizedPublicPictureUrl
}