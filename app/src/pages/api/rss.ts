import { NextApiRequest, NextApiResponse } from "next"

import { getAllDetailedPosts, getDetailedPostBySlug } from "@/lib/posts"
import { getLatestDate } from "@/lib/date"
import { getSiteBaseURL } from "@/lib/url"
import { handleError } from "@/lib/error"

import { getRssXML, GetRssXMLProps } from "@/templates/rss"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const previewPosts = await getAllDetailedPosts()

		const baseURL = getSiteBaseURL(req)

		const posts: GetRssXMLProps["posts"] = await Promise.all(
			previewPosts.map(async previewPost => {
				const { slug } = previewPost

				const post = await getDetailedPostBySlug(slug)

				return {
					title: post.title,
					link: `${baseURL}/${slug}`,
					description: post.description,
					content: post.content,
					date: new Date(post.date).toUTCString()
				}
			})
		)

		const latestPostDate = getLatestDate(posts.map(post => new Date(post.date)))

		const sitemapXML = getRssXML({
			title: "Blog by Guilherme Mota",
			description: "A blog about technology.",
			link: baseURL,
			latestPostDate: latestPostDate.toUTCString(),
			posts
		})

		res.setHeader("Content-Type", "text/xml")

		res.status(200).end(sitemapXML)
	} catch (error) {
		handleError(error)
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
