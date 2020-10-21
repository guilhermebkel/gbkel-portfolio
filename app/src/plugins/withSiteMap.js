const fs = require("fs")
const path = require("path")

let isGeneratingSiteMap = false

const log = (message) => {
	console.log(`> [SiteMap] ${message}`)
}

const getSitemapXML = (urls) => (
	`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urls.map(url => `
				<url>
					<loc>${url}</loc>
				</url>
			`).join("")}
		</urlset>
	`
)

const withSiteMap = async (nextConfig = {}) => {
	const config = nextConfig.siteMap

	if (config.disable || isGeneratingSiteMap) {
		log("SiteMap Generator is disabled")
		return nextConfig
	}

	log("Generating SiteMap...")
	isGeneratingSiteMap = true

	const publicDirectory = path.join(process.cwd(), "public")
	const siteMapPath = path.join(publicDirectory, "sitemap.xml")

	const filesPath = path.join(process.cwd(), "src")

	const pagesPath = path.join(filesPath, "pages")
	const postsPath = path.join(filesPath, "posts")

	const [rawPages, rawPosts] = await Promise.all([
		fs.promises.readdir(pagesPath),
		fs.promises.readdir(postsPath)
	])
	
	const pageSlugs = []

	rawPages.forEach(rawPage => {
		const isValidPage = !rawPage.startsWith("_") && !rawPage.startsWith("[") && rawPage.endsWith(".tsx")

		if (isValidPage) {
			const [pageSlug] = rawPage.split(".")

			if (pageSlug === "index") {
				pageSlugs.push("")
			} else {
				pageSlugs.push(pageSlug)
			}
		}
	})

	rawPosts.forEach(rawPost => {
		const [pageSlug] = rawPost.split(".")

		pageSlugs.push(pageSlug)
	})

	const urls = pageSlugs.map(pageSlug => {
		const url = `${config.baseURL}/${pageSlug}`

		return url
	})

	const sitemapXML = getSitemapXML(urls)

	await fs.promises.writeFile(siteMapPath, sitemapXML, {
		encoding: "utf8"
	})

	log("SiteMap generated with success!")

	return nextConfig
}

module.exports = withSiteMap
