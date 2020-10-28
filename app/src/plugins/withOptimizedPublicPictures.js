const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const { imageConfig } = require("../config/image")

let isOptimizingPublicPictures = false

const log = (message) => {
	console.log(`> [OptimizedPublicPictures] ${message}`)
}

const hasValidPictureExtension = (value) => {
	const { validPictureExtensions } = imageConfig

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
		const { responsiveSizes } = imageConfig

		const picture = await sharp(picturePath).toBuffer()

		const webpOptions = {
			lossless: true,
			reductionEffort: 6,
			quality: 75,
			force: true
		}

		const optimizedPicture = await sharp(picture)
			.webp(webpOptions)
			.toBuffer()

		await sharp(optimizedPicture).toFile(picturePath)

		await Promise.all(
			responsiveSizes.map(async size => {
				const [path, extension] = picturePath.split(".")

				const finalPath = imageConfig.buildResponsiveSrc(path, size, extension)

				await sharp(picture)
					.webp(webpOptions)
					.resize(size)
					.toFile(finalPath)
			})
		)
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
