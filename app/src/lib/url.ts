import { NextApiRequest } from "next"

export const getSiteBaseURL = (req: NextApiRequest) => {
	const requestProto  = req.headers["x-forwarded-proto"]
	const requestHost = req.headers["x-forwarded-host"]

	const baseURL = `${requestProto}://${requestHost}`

	return baseURL
}
