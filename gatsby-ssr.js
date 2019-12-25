import React from "react"

import siteMetadata from "./config/metadata"

export { wrapRootElement } from "./gatsby/wrapRootElement"

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
    <meta name="theme-color" content="#FFF" key="theme-color" />,
    <meta property="og:title" content={siteMetadata.title} key="og:title" />,
    <meta property="og:image" content="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9168d579801893.5d4ec91666bf0.png" key="og:image" />,
    <meta property="og:url" content={siteMetadata.siteUrl} key="og:url"/>,
    <meta property="og:description" content={siteMetadata.description} key="og:description" />,
    <meta property="og:type" content="website" key="og:type" />,
    <meta name="description" content={siteMetadata.description} key="description" />,
    <meta name="keywords" content={siteMetadata.keywords} key="keywords" />,
		<title key="title">{siteMetadata.title}</title>
	])
}