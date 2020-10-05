import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const file = req.query.file as string

		const context = file
			.split("/")
			.pop()
			.split(".json")
			.shift()

		if (!context) {
			res.status(404).json({ error: "ContextNotFoundError" })
		}

		const iconUrl = "https://some-icon"

		const icons = []
		const sizes = ["192x192", "256x256", "512x512"]

		sizes.forEach(size => {
			icons.push({ src: iconUrl, sizes: size, type: "image/png" })
		})

		const manifest = {
			name: "Guilherme Mota",
			short_name: "Guilherme Mota",
			display: "standalone",
			description: "Guilherme Mota",
			background_color: "#f2f2f2",
			theme_color: "#f8f8f8",
			start_url: req.url,
			icons
		}

		res.status(200).json(manifest)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
