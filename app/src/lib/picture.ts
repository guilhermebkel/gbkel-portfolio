import { encode } from "blurhash"
import fs from "fs"
import path from "path"
import sharp from "sharp"

import { hasValidPictureExtension } from "@/lib/validation"

type PicturePath = {
	fullPath: string
	publicPath: string
}

export type PublicPictureBlurHashes = {
	[publicPath: string]: string
}

export const getAllPublicPictureBlurHashes = async (): Promise<PublicPictureBlurHashes> => {
	const publicPath = path.join(process.cwd(), "public")

	const publicPictureBlurHashes: PublicPictureBlurHashes = {}
	const assetFilePaths: string[] = []

	try {
		const getAllFilePathsFromDirectory = async (dirPath: string) => {
			const files = await fs.promises.readdir(dirPath, { withFileTypes: true })
		
			await Promise.all(
				files.map(async file => {
					const isDirectory = file.isDirectory()
	
					const filePath = path.join(dirPath, file.name)
	
					if (isDirectory) {
						return await getAllFilePathsFromDirectory(filePath)
					}
	
					assetFilePaths.push(filePath)
				})
			)
		}
	
		await getAllFilePathsFromDirectory(publicPath)
	
		const picturePaths: PicturePath[] = assetFilePaths
			.filter(hasValidPictureExtension)
			.map(assetFilePath => ({
				fullPath: assetFilePath,
				publicPath: assetFilePath.replace(publicPath, "")
			}))
	
		await Promise.all(
			picturePaths.map(async picturePath => {
				try {
					const picture = await fs.promises.readFile(picturePath.fullPath)
	
					const blurHash = await new Promise<string>(callback => {
						sharp(picture)
							.raw()
							.ensureAlpha()
							.resize(32, 32, { fit: "inside" })
							.toBuffer((_, buffer, info) => {
								const { width, height } = info
	
								const pixels = new Uint8ClampedArray(buffer)

								const blurHash = encode(pixels, width, height, 4, 4)

								return callback(blurHash)
							})
					})
	
					publicPictureBlurHashes[picturePath.publicPath] = blurHash
				} catch (error) {
					console.error(error.message)
				}
			})
		)
	} catch (error) {
		console.error(error.message)
	}

	return publicPictureBlurHashes
}
