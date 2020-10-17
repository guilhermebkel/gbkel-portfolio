const environmentConfig = {
	isServerDev: !process.env.AWS_REGION || process.env.NODE_ENV === "development",
	isBrowserDev: globalThis?.origin?.includes?.("localhost")
}

module.exports = {
	environmentConfig
}