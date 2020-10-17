import { NextPageContext } from "next"

export const isValidNumber = (value: number): boolean => {
	const isValid = !isNaN(+value)

	return isValid
}

export const isMobileRequest = (ctx?: NextPageContext): boolean => {
	const isMobile = (ctx?.req?.headers?.["user-agent"] || navigator?.userAgent).match(
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
	)

	return !!isMobile
}