import { cdnConfig } from "@/config/cdn"
import { environmentConfig } from "@/config/environment"

export const buildCDNUrl = (path: string): string => {
	if (environmentConfig.isBrowserDev) {
		return path
	}

	const CDNUrl = `${cdnConfig.baseURL}${path}`

	return CDNUrl
}
