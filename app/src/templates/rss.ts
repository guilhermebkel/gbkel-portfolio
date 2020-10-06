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
}
