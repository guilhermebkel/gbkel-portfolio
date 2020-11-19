import React from "react"

type MetaTagProps = {
	title: string
	description: string
	imageSrc: string
	url: string
}

const MetaTag: React.FC<MetaTagProps> = (props) => {
	const { title, description, imageSrc, url } = props

	return (
		<>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name="title" content={title}></meta>
			<meta name="description" content={description}></meta>

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website"></meta>
			<meta property="og:url" content={url}></meta>
			<meta property="og:title" content={title}></meta>
			<meta property="og:description" content={description}></meta>
			<meta property="og:image" content={imageSrc}></meta>

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:url" content={url}></meta>
			<meta property="twitter:title" content={title}></meta>
			<meta property="twitter:description" content={description}></meta>
			<meta property="twitter:image" content={imageSrc}></meta>
		</>
	)
}

export default MetaTag
