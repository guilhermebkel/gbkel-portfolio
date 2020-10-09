import { NextApiRequest, NextApiResponse } from "next"

import { optimizePictureAsset } from "@/lib/picture"


export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const assetKey = req.query.assetKey as string
		const height = req.query.height as string 
		const width = req.query.width as string

		if (!assetKey) {
			return res.status(404).json({ error: "PictureAssetNotFound" })
		}

		const optimizedPicture = await optimizePictureAsset({
			assetKey,
			height: isNaN(+height) ? null : +height,
			width: isNaN(+width) ? null : +width
		})

		res.setHeader("Content-Type", "image/png")
		res.setHeader("Cache-Control", "public, immutable, no-transform, s-maxage=31536000, max-age=31536000")

		res.status(200).end(optimizedPicture)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
