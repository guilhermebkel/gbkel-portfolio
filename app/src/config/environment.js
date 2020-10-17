const environmentConfig = {
	isServerDev: !process.env.AWS_REGION || process.env.NODE_ENV === "development",
	isBrowserDev: globalThis.origin && globalThis.origin.includes?.("localhost"),
	isBrowser: globalThis.origin
}

module.exports = {
	environmentConfig
}