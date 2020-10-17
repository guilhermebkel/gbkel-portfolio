const environmentConfig = {
	isDev: !process.env.AWS_REGION || process.env.NODE_ENV === "development" || !globalThis["origin"]
}

module.exports = {
	environmentConfig
}