import { NextApiRequest, NextApiResponse } from "next"

import { getDetailedPostBySlug } from "@/lib/posts"
import { getScreenshot } from "@/lib/browser"
import { handleError } from "@/lib/error"

import { getThumbnailHTML } from "@/templates/thumbnail"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const slug = req.query.slug as string

		if (!slug) {
			res.status(404).json({ error: "SlugNotFoundError" })
		}

		const post = await getDetailedPostBySlug(slug)

		if (!post) {
			res.status(404).json({ error: "PostNotFoundError" })
		}

		const thumbnailHtml = getThumbnailHTML({
			title: post.title
		})

		const thumbnailPicture = await getScreenshot(thumbnailHtml)

		res.setHeader("Content-Type", "image/png")
		// res.setHeader("Cache-Control", "public, immutable, no-transform, s-maxage=31536000, max-age=31536000")

		res.status(200).end(thumbnailPicture)
	} catch (error) {
		handleError(error)
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
