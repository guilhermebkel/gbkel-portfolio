const imageConfig = {
	responsiveSizes: [64, 128, 256, 512, 1024],
	buildResponsiveSrc: (path, size, extension) => `${path}-${size}w.${extension}`
}

module.exports = {
	imageConfig
}
