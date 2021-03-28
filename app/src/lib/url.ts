import { NextApiRequest } from "next"
import slugify from "slugify"

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

export const getSlugFromUrl = (url: string): string => {
	const finalPath = url.split("/").pop()

	const [rawSlug] = finalPath.split(".")

	const slug = slugify(rawSlug)

	return slug
}
