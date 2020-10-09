export type OptimizedPublicPictureUrlOptions = {
	assetKey: string
	baseURL?: string
	width?: number
	height?: number
}

export const optimizedPublicPictureUrl = (
	options: OptimizedPublicPictureUrlOptions
) => {
	const { baseURL, ...resizeOptions } = options

	const params = []

	Object.entries(resizeOptions).forEach(([key, value]) => {
		params.push(`${key}=${value}`)
	})

	const queryParams = params.join("&")

	const optimizedPublicPictureUrlPath = `api/optimized-picture?${queryParams}`

	let optimizedPublicPictureUrl: string

	if (baseURL) {
		optimizedPublicPictureUrl = `${baseURL}/${optimizedPublicPictureUrlPath}`
	} else {
		optimizedPublicPictureUrl = optimizedPublicPictureUrlPath
	}

	return optimizedPublicPictureUrl
}
