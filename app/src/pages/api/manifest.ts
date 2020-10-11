import { NextApiRequest, NextApiResponse } from "next"

import { getSiteBaseURL } from "@/lib/url"

type ManifestIcon = {
	src: string
	sizes: string
	type: "image/png"
}

type Manifest = {
	name: string
	short_name: string
	display: "standalone"
	description: string
	background_color: string
	theme_color: string
	start_url: string
	orientation: "portrait"
	icons: Array<ManifestIcon>
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const siteBaseURL = getSiteBaseURL(req)

		const manifest: Manifest = {
			name: "Guilherme Mota",
			short_name: "Mota",
			display: "standalone",
			description: "All info about Mota.",
			background_color: "#FFFFFF",
			theme_color: "#FFFFFF",
			orientation: "portrait",
			start_url: siteBaseURL,
			icons: []
		}

		const sizes = ["192x192", "256x256", "512x512"]

		sizes.forEach(size => {
			manifest.icons.push({
				src: `${siteBaseURL}/logo.png`,
				sizes: size,
				type: "image/png"
			})
		})

		res.status(200).json(manifest)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
