const environmentConfig = {
	isDev: globalThis.origin ? (
		Boolean(globalThis.origin.includes("localhost"))
	) : (
		!process.env.AWS_REGION || process.env.NODE_ENV === "development"
	)
}

module.exports = {
	environmentConfig
}