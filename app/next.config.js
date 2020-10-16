const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")

const isDev = process.env.NODE_ENV === "development"

module.exports = withPlugins([
	[withPWA, {
		target: "serverless",
		pwa: {
			disable: isDev,
			dest: "public"
		}
	}],
])
