const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")
const withOptimizedPublicPictures = require("./src/plugins/withOptimizedPublicPictures")

const { environmentConfig } = require("./src/config/environment")
const { cdnConfig } = require("./src/config/cdn")

module.exports = withPlugins([
	[withPWA, {
		pwa: {
			disable: environmentConfig.isDev,
			dest: "public"
		}
	}],
	[withOptimizedPublicPictures, {
		optimizedPublicPictures: {
			disable: environmentConfig.isDev
		}
	}],
	[{
		target: "serverless",
		assetPrefix: cdnConfig.baseURL
	}]
])
