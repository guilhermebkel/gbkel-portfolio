import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const context = req.query.slug as string

		if (!context) {
			res.status(404).json({ error: "ContextNotFoundError" })
		}

		const serviceWorkerJSString = ""

		res.setHeader("Content-Type", "application/javascript")

		res.status(200).end(serviceWorkerJSString)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
