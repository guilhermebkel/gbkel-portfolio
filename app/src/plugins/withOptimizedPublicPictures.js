const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

let isOptimizingPublicPictures = false

const log = (message) => {
	console.log(`> [OptimizedPublicPictures] ${message}`)
}

const hasValidPictureExtension = (value) => {
	const validPictureExtensions = [".jpg", ".png", ".webp", ".jpeg"]

	const isValid = validPictureExtensions.some(extension => value.includes(extension))

	return isValid
}

const getAllFilesPathsFromDirectory = async (directory) => {
	const filePaths = []

	const searchFilesOnDirectory = async (directory) => {
		try {
			const files = await fs.promises.readdir(directory, { withFileTypes: true })

			await Promise.all(
				files.map(async file => {
					const isDirectory = file.isDirectory()
	
					const filePath = path.join(directory, file.name)
	
					if (isDirectory) {
						return await searchFilesOnDirectory(filePath)
					}
	
					filePaths.push(filePath)
				})
			)
		} catch (error) {
			log(error.message)
		}
	}

	await searchFilesOnDirectory(directory)

	return filePaths
}

const optimizePicture = async (picturePath) => {
	try {
		const optimizedPicture = await sharp(picturePath)
			.webp({
				lossless: true,
				reductionEffort: 6,
				force: true
			})
			.toBuffer()

		await sharp(optimizedPicture).toFile(picturePath)
	} catch (error) {
		log(error.message)
	}
}

const withOptimizedPublicPictures = async (nextConfig = {}) => {
	const config = nextConfig.optimizedPublicPictures

	if (config.disable || isOptimizingPublicPictures) {
		log("Public pictures optimization is disabled")
		return nextConfig
	}

	log("Optimizing public pictures...")
	isOptimizingPublicPictures = true

	const publicDirectory = path.join(process.cwd(), "public")

	const filePaths = await getAllFilesPathsFromDirectory(publicDirectory)

	const picturePaths = filePaths.filter(hasValidPictureExtension)

	await Promise.all(
		picturePaths.map(picturePath => optimizePicture(picturePath))
	)

	log("Public pictures optimized with success!")

	return nextConfig
}

module.exports = withOptimizedPublicPictures
