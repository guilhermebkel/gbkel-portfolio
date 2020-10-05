import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const file = req.query.file as string

		const context = file
			.split("/")
			.pop()
			.split(".js")
			.shift()

		if (!context) {
			res.status(404).json({ error: "ContextNotFoundError" })
		}

		const serviceWorkerJSString = ""

		res.setHeader("Content-Type", "application/javascript")

		res.end(serviceWorkerJSString)
	} catch (error) {
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
