const withPWA = require("next-pwa")

const isDev = process.env.NODE_ENV === "development"

module.exports = withPWA({
	target: "serverless",
	pwa: {
		disable: isDev,
		dest: "public"
	}
})
