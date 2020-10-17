const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")
const withOptimizedPublicPictures = require("./src/plugins/withOptimizedPublicPictures")

const isDev = process.env.NODE_ENV === "development"
const cdnBaseURL = process.env.CDN_URL

module.exports = withPlugins([
	[withPWA, {
		pwa: {
			disable: isDev,
			dest: "public"
		}
	}],
	[withOptimizedPublicPictures, {
		optimizedPublicPictures: {
			disable: isDev
		}
	}],
	[{
		target: "serverless",
		assetPrefix: cdnBaseURL || ""
	}]
])
