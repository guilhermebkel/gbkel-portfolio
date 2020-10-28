const imageConfig = {
	responsiveSizes: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
	buildResponsiveSrc: (path, size, extension) => `${path}-${size}w.${extension}`,
	validPictureExtensions: [".jpg", ".png", ".webp", ".jpeg"]
}

module.exports = {
	imageConfig
}
