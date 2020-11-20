import React from "react"
import Head from "next/head"

type MetaTagProps = {
	page?: {
		title?: string
		description?: string
	}
	share?: {
		title?: string
		description?: string
		imageSrc?: string
		url?: string
		type?: "website" | "article"
		publishDate?: string
		authorUrl?: string
		authorName?: string
		readingTime?: string
	}
	app?: {
		ios?: {
			url?: string
			appStoreId?: string
		}
		android?: {
			url?: string
			package?: string
		}
		name?: string
	}
}

const MetaTag: React.FC<MetaTagProps> = (props) => {
	const { page, share, app } = props

	const PrimaryMetaTags = (
		<>
			<title>{page?.title}</title>
			<meta name="title" content={page?.title} />
			<meta name="description" content={page?.description} />
		</>
	)

	const FacebookMetaTags = (
		<>
			<meta property="og:type" content={share?.type} />
			<meta property="og:url" content={share?.url} />
			<meta property="og:title" content={share?.title} />
			<meta property="og:description" content={share?.description} />
			<meta property="og:image" content={share?.imageSrc} />
		</>
	)

	const TwitterMetaTags = (
		<>
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={share?.url} />
			<meta property="twitter:title" content={share?.title} />
			<meta property="twitter:description" content={share?.description} />
			<meta property="twitter:image" content={share?.imageSrc} />
			<meta property="twitter:image:src" content={share?.imageSrc} />
			<meta name="twitter:label1" {...({ value: "Reading time" })} />
			<meta name="twitter:data1" {...({ value: share?.readingTime })} />
		</>
	)

	const SecondaryMetaTags = (
		<>
			<meta property="article:published_time" content={share?.publishDate} />
			<meta name="author" content={share?.authorName} />
			<link rel="author" href={share?.authorUrl} />
			<meta property="article:author" content={share?.authorUrl} />
		</>
	)

	const AppMetaTags = (
		<>
			<meta property="al:ios:url" content={app?.ios?.url} />
			<meta property="al:ios:app_store_id" content={app?.ios?.appStoreId} />
			<meta property="al:android:package" content={app?.android?.package} />
			<meta property="al:android:url" content={app?.android?.url} />
			<meta property="al:web:url" content={share?.url} />
			<meta property="al:ios:app_name" content={app?.name} />
			<meta property="al:android:app_name" content={app?.name} />
		</>
	)

	return (
		<Head>
			{PrimaryMetaTags}
			{FacebookMetaTags}
			{TwitterMetaTags}
			{SecondaryMetaTags}
			{AppMetaTags}
		</Head>
	)
}

export default MetaTag
