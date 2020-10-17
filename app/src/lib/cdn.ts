import { cdnConfig } from "@/config/cdn"
import { environmentConfig } from "@/config/environment"

export const buildCDNUrl = (path: string): string => {
	const isDev = environmentConfig.isBrowser ? environmentConfig.isBrowserDev : environmentConfig.isServerDev

	if (isDev) {
		return path
	}

	const CDNUrl = `${cdnConfig.baseURL}${path}`

	return CDNUrl
}
