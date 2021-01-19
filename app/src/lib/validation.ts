import { NextPageContext } from "next"

export const isValidNumber = (value: number): boolean => {
	const isValid = !isNaN(+value)

	return isValid
}

export const getRequestUserAgent = (ctx?: NextPageContext): string => {
	const requestUserAgent = ctx?.req?.headers?.["user-agent"]

	return requestUserAgent
}

export const getWindowUserAgent = (window: Window): string => {
	const windowUserAgent = window?.navigator?.userAgent

	return windowUserAgent
}

type GetDeviceInfo = {
	isMobile: boolean
	isDesktop: boolean
	isAndroid: boolean
	isIos: boolean
	isSSR: boolean
}

export const getDeviceInfo = (userAgent: string): GetDeviceInfo => {
	const isAndroid = Boolean(userAgent.match(/Android/i))
	const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i))
	const isOpera = Boolean(userAgent.match(/Opera Mini/i))
	const isWindows = Boolean(userAgent.match(/IEMobile/i))
	const isSSR = Boolean(userAgent.match(/SSR/i))
	const isMobile = Boolean(isAndroid || isIos || isOpera || isWindows)
	const isDesktop = Boolean(!isMobile && !isSSR)

	return {
		isMobile,
		isDesktop,
		isAndroid,
		isIos,
		isSSR
	}
}