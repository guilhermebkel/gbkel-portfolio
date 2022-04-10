const environmentConfig = {
	isDev: globalThis.origin ? (
		Boolean(globalThis.origin.includes("localhost"))
	) : (
		process.env.NODE_ENV === "development"
	)
}

module.exports = {
	environmentConfig
}