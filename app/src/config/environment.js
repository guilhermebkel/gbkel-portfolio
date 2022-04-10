console.log(process.env, globalThis.origin, globalThis.origin ? (
	globalThis.origin && globalThis.origin.includes("localhost")
) : (
	!process.env.AWS_REGION || process.env.NODE_ENV === "development"
))

const environmentConfig = {
	isDev: globalThis.origin ? (
		globalThis.origin && globalThis.origin.includes("localhost")
	) : (
		!process.env.AWS_REGION || process.env.NODE_ENV === "development"
	)
}

module.exports = {
	environmentConfig
}