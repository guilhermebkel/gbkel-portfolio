import { NextApiRequest } from "next"

export const getSiteBaseURL = (req: NextApiRequest): string => {
	const requestProto  = req.headers["x-forwarded-proto"]
	const requestHost = req.headers["x-forwarded-host"]

	const baseURL = `${requestProto}://${requestHost}`

	return baseURL
}
