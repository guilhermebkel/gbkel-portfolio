import { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import fs from "fs"
import sharp from "sharp"

import { OptimizedPublicPictureUrlOptions } from "@/lib/picture"

const ASSETS_FOLDER_PATH = path.join(process.cwd(), "src", "assets")

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const assetKey = req.query.assetKey as string
		const height = req.query.height as string 
		const width = req.query.width as string

		if (!assetKey) {
			return res.status(404).json({ error: "PictureAssetNotFound" })
		}

		const options: OptimizedPublicPictureUrlOptions = {
			assetKey,
			height: isNaN(+height) ? null : +height,
			width: isNaN(+width) ? null : +width
		}
		
		const picturePath = path.join(ASSETS_FOLDER_PATH, assetKey)

		const picture = await fs.promises.readFile(picturePath)

		const optimizedPicture = await sharp(picture)
			.resize(options.width, options.height)
			.toBuffer()

		res.setHeader("Content-Type", "image/png")
		res.setHeader("Cache-Control", "public, immutable, no-transform, s-maxage=31536000, max-age=31536000")

		res.status(200).end(optimizedPicture)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
