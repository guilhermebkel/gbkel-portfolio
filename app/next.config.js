const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")
const withOptimizedPublicPictures = require("./src/plugins/withOptimizedPublicPictures")
const withSiteMap = require("./src/plugins/withSiteMap")
const withRSSFeed = require("./src/plugins/withRSSFeed")

const { environmentConfig } = require("./src/config/environment")
const { cdnConfig } = require("./src/config/cdn")
const { urlConfig } = require("./src/config/url")

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
	[withSiteMap, {
		siteMap: {
			disable: environmentConfig.isDev,
			baseURL: urlConfig.baseURL
		}
	}],
	[withRSSFeed, {
		rssFeed: {
			disable: environmentConfig.isDev,
			baseURL: urlConfig.baseURL
		}
	}],
	[{
		target: "serverless",
		assetPrefix: environmentConfig.isDev ? "" : cdnConfig.baseURL
	}]
])
