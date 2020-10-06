export type GetRssXMLProps = {
	latestPostDate: string
	description: string
	title: string
	link: string
	posts: Array<{
		title: string
		link: string
		date: string
		content: string
	}>
}

export const getRssXML = (props: GetRssXMLProps): string => {
	const {
		latestPostDate,
		description,
		link,
		title,
		posts
	} = props

	return `<?xml version="1.0" encoding="UTF-8"?>
		<rss version="2.0">
			<channel>
					<title>${title}</title>
					<link rel="self">${link}</link>
					<description>${description}</description>
					<language>en</language>
					<lastBuildDate>${latestPostDate}</lastBuildDate>
					${posts.map(post => `
						<item>
							<title>${post.title}</title>
							<link rel="self">
								${post.link}
							</link>
							
							<pubDate>${post.date}</pubDate>
							<description>
							<![CDATA[${post.content}]]>
							</description>
						</item>
					`).join("")}
			</channel>
		</rss>
	`
}
