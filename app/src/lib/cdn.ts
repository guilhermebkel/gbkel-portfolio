import { cdnConfig } from "@/config/cdn"
import { environmentConfig } from "@/config/environment"

export const buildCDNUrl = (path: string): string => {
	console.log(environmentConfig.isDev)
	if (environmentConfig.isDev) {
		return path
	}

	const CDNUrl = `${cdnConfig.baseURL}${path}`

	return CDNUrl
}
