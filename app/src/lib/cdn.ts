import { cdnConfig } from "@/config/cdn"

export const buildCDNUrl = (path: string): string => {
	const CDNUrl = `${cdnConfig.baseURL}${path}`

	return CDNUrl
}
