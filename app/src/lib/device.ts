import { NextPageContext } from "next"

import reactDeviceDetect from "react-device-detect"

type DeviceInfo = {
	isMobile: boolean
	isDesktop: boolean
	isAndroid: boolean
	isIOS: boolean
}

export const getClientDeviceInfo = (): DeviceInfo => {
	return {
		isMobile: reactDeviceDetect.isMobile,
		isDesktop: !reactDeviceDetect.isMobile,
		isAndroid: reactDeviceDetect.isAndroid,
		isIOS: reactDeviceDetect.isIOS
	}
}

export const getServerDeviceInfo = (ctx: NextPageContext): DeviceInfo => {
	const userAgent = ctx?.req?.headers?.["user-agent"]

	const isAndroid = Boolean(userAgent.match(/Android/i))
	const isIOS = Boolean(userAgent.match(/iPhone|iPad|iPod/i))
	const isOpera = Boolean(userAgent.match(/Opera Mini/i))
	const isWindows = Boolean(userAgent.match(/IEMobile/i))
	const isSSR = Boolean(userAgent.match(/SSR/i))
	const isMobile = Boolean(isAndroid || isIOS || isOpera || isWindows)
	const isDesktop = Boolean(!isMobile && !isSSR)

	return {
		isMobile,
		isDesktop,
		isAndroid,
		isIOS
	}
}