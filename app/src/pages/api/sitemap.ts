import { NextApiRequest, NextApiResponse } from "next"
import globby from "globby"
import path from "path"

import { getSitemapXML } from "@/templates/sitemap"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const filesPath = path.join(process.cwd(), "src")

		const pages = await globby([
			"pages/**/*.tsx",
			"!pages/_*.tsx",
			"!pages/**/[slug].tsx",
			"!pages/api",
			"posts/*.md"
		], {
			cwd: filesPath
		})

		const requestProto  = req.headers["x-forwarded-proto"]
		const requestHost = req.headers["x-forwarded-host"]

		const baseURL = `${requestProto}://${requestHost}`

		const urls = pages.map(page => {
			let path = page.split("/").pop().split(".").shift()

			if (path === "index") {
				path = ""
			}

			const url = `${baseURL}/${path}`

			return url
		})

		const sitemapXML = getSitemapXML({
			urls
		})

		res.setHeader("Content-Type", "text/xml")

		res.status(200).end(sitemapXML)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
