const withPWA = require("next-pwa")
const withOptimizedPublicPictures = require("./src/plugins/withOptimizedPublicPictures")

const isDev = process.env.NODE_ENV === "development"

module.exports = withOptimizedPublicPictures(
	withPWA({
		target: "serverless",
		pwa: {
			disable: isDev,
			dest: "public"
		},
		optimizedPublicPictures: {
			disable: isDev
		}
	})
)
