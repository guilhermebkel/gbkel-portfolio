import { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import fs from "fs"

import { getSiteBaseURL } from "@/lib/url"
import { handleError } from "@/lib/error"

import { getSitemapXML } from "@/templates/sitemap"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
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

		const baseURL = getSiteBaseURL(req)

		const urls = pageSlugs.map(pageSlug => {
			const url = `${baseURL}/${pageSlug}`

			return url
		})

		const sitemapXML = getSitemapXML({
			urls
		})

		res.setHeader("Content-Type", "text/xml")

		res.status(200).end(sitemapXML)
	} catch (error) {
		handleError(error)
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
