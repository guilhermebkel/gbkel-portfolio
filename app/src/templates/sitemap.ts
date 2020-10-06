type GetSitemapXMLProps = {
	urls: string[]
}

export const getSitemapXML = (props: GetSitemapXMLProps): string => {
	const { urls } = props

	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urls.map(url => `
				<url>
					<loc>${url}</loc>
				</url>
			`).join("")}
		</urlset>
	`
}
