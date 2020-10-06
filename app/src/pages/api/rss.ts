import { NextApiRequest, NextApiResponse } from "next"

import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { getLatestDate } from "@/lib/date"

import { getRssXML, GetRssXMLProps } from "@/templates/rss"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const previewPosts = await getAllPosts()

		const requestProto  = req.headers["x-forwarded-proto"]
		const requestHost = req.headers["x-forwarded-host"]

		const baseURL = `${requestProto}://${requestHost}`

		const posts: GetRssXMLProps["posts"] = await Promise.all(
			previewPosts.map(async previewPost => {
				const { slug } = previewPost

				const post = await getPostBySlug(slug)

				return {
					title: post.title,
					link: `${baseURL}/${slug}`,
					description: post.description,
					content: post.content,
					date: post.date
				}
			})
		)

		const latestPostDate = getLatestDate<string>(posts.map(post => post.date))

		const sitemapXML = getRssXML({
			title: "Blog by Guilherme Mota",
			description: "A blog about technology.",
			link: baseURL,
			latestPostDate,
			posts
		})

		res.setHeader("Content-Type", "text/xml")

		res.status(200).end(sitemapXML)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
