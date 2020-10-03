import { NextApiRequest, NextApiResponse } from "next"

import { getPostBySlug } from "@/lib/posts"
import { getScreenshot } from "@/lib/browser"

import { getThumbnailHtml } from "@/templates/thumbnail"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const file = req.query.file as string

		const slug = file
			.split("/")
			.pop()
			.split(".png")
			.shift()

		if (!slug) {
			res.status(404).json({ error: "SlugNotFoundError" })
		}

		const post = await getPostBySlug(slug)

		if (!post) {
			res.status(404).json({ error: "PostNotFoundError" })
		}

		const thumbnailHtml = getThumbnailHtml({
			title: post.title
		})

		const thumbnailPicture = await getScreenshot(thumbnailHtml)

		res.setHeader("Content-Type", "image/png")
		res.setHeader("Cache-Control", "public, immutable, no-transform, s-maxage=31536000, max-age=31536000")

		res.end(thumbnailPicture)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
