const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")
const marked = require("marked")
const readingTime = require("reading-time")

const POST_FOLDER_PATH = path.join(process.cwd(), "src", "posts")

let isGeneratingRSSFeed = false

const log = (message) => {
	console.log(`> [RSSFeed] ${message}`)
}

const getDetailedPostBySlug = async (slug) => {
	const postFilePath = path.join(POST_FOLDER_PATH, `${slug}.md`)
	const postFileContent = await fs.promises.readFile(postFilePath, "utf8")

	const meta = matter(postFileContent)
	const content = marked(meta.content)

	const thumbnailUrl = `/thumbnail/${slug}.png`

	const readingTimeTextInfo = readingTime(content)

	return {
		title: meta.data.title,
		description: meta.data.description || "",
		date: meta.data.date,
		readingTime: readingTimeTextInfo.text,
		thumbnailUrl,
		content
	}
}

const getAllPostPreviews = async () => {
	const postFileNames = await fs.promises.readdir(POST_FOLDER_PATH)
	
	const postPreviews = await Promise.all(
		postFileNames.map(async postFileName => {
			const slug = postFileName.replace(".md", "")

			const post = await getDetailedPostBySlug(slug)
	
			return {
				title: post.title,
				date: post.date,
				url: slug,
				slug
			}
		})
	)

	return postPreviews
}

const getLatestDate = (dates) => {
	const latestDateInMilliseconds = Math.max(
		...dates.map(date => +new Date(date))
	)

	let latestDate

	dates.forEach(date => {
		const dateInMilliseconds = +new Date(date)

		if (dateInMilliseconds === latestDateInMilliseconds) {
			latestDate = date
		}
	})

	return latestDate
}

const getRssXML = ({
	latestPostDate,
	description,
	link,
	title,
	posts
}) => (
	`<?xml version="1.0" encoding="UTF-8"?>
		<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
			<channel>
				<atom:link href="${link}/rss.xml" rel="self" type="application/rss+xml" />
				<title>${title}</title>
				<link>${link}</link>
				<description>${description}</description>
				<language>en</language>
				<lastBuildDate>${latestPostDate}</lastBuildDate>
				${posts.map(post => `
					<item>
						<title>${post.title}</title>
						<link>${post.link}</link>
						<guid>${post.link}</guid>
						<pubDate>${post.date}</pubDate>
						<description>
							<![CDATA[${post.content}]]>
						</description>
					</item>
				`).join("")}
			</channel>
		</rss>
	`
)

const withRSSFeed = async (nextConfig = {}) => {
	const config = nextConfig.rssFeed

	if (config.disable || isGeneratingRSSFeed) {
		log("RSSFeed Generator is disabled")
		return nextConfig
	}

	log("Generating RSSFeed...")
	isGeneratingRSSFeed = true

	const publicDirectory = path.join(process.cwd(), "public")
	const RSSFeedPath = path.join(publicDirectory, "rss.xml")

	const previewPosts = await getAllPostPreviews()

	const { baseURL } = config

	const posts = await Promise.all(
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

	const postDates = posts.map(post => new Date(post.date))

	const latestPostDate = getLatestDate(postDates)

	const rssXML = getRssXML({
		title: "Blog by Guilherme Mota",
		description: "A blog about technology.",
		link: baseURL,
		latestPostDate: latestPostDate.toUTCString(),
		posts
	})

	await fs.promises.writeFile(RSSFeedPath, rssXML, {
		encoding: "utf8"
	})

	log("RSSFeed generated with success!")

	return nextConfig
}

module.exports = withRSSFeed
