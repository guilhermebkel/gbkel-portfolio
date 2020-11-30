import { NextApiRequest } from "next"

export const getSiteBaseURL = (req: NextApiRequest): string => {
	const requestProto  = req.headers["x-forwarded-proto"]
	const requestHost = req.headers["x-forwarded-host"]

	const baseURL = `${requestProto}://${requestHost}`

	return baseURL
}

export const getFixedEncodeURIComponent = (value: string): string => {
	return encodeURIComponent(value).replace(/[!'()*]/g, function(c) {
		return "%" + c.charCodeAt(0).toString(16)
	})
}