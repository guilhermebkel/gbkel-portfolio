import React from "react"

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
			{page?.title && (
				<>
					<title>{page.title}</title>
					<meta name="title" content={page.title} />
				</>
			)}
			{page?.description && <meta name="description" content={page.description} />}
		</>
	)

	const FacebookMetaTags = (
		<>
			{share?.type && <meta property="og:type" content={share.type} />}
			{share?.url && <meta property="og:url" content={share.url} />}
			{share?.title && <meta property="og:title" content={share.title} />}
			{share?.description && <meta property="og:description" content={share.description} />}
			{share?.imageSrc && <meta property="og:image" content={share.imageSrc} />}
		</>
	)

	const TwitterMetaTags = (
		<>
			<meta property="twitter:card" content="summary_large_image" />
			{share?.url && <meta property="twitter:url" content={share.url} />}
			{share?.title && <meta property="twitter:title" content={share.title} />}
			{share?.description && <meta property="twitter:description" content={share.description} />}
			{share?.imageSrc && (
				<>
					<meta property="twitter:image" content={share.imageSrc} />
					<meta property="twitter:image:src" content={share.imageSrc} />
				</>
			)}
			{share?.readingTime && (
				<>
					<meta name="twitter:label1" {...({ value: "Reading time" })} />
					<meta name="twitter:data1" {...({ value: share.readingTime })} />
				</>
			)}
		</>
	)

	const SecondaryMetaTags = (
		<>
			{share?.publishDate && <meta property="article:published_time" content={share.publishDate} />}
			{share?.authorName && <meta name="author" content={share.authorName} />}
			{share?.authorUrl && (
				<>
					<link rel="author" href={share.authorUrl} />
					<meta property="article:author" content={share.authorUrl} />
				</>
			)}
		</>
	)

	const AppMetaTags = (
		<>
			{app?.ios?.url && <meta property="al:ios:url" content={app.ios.url} />}
			{app?.ios?.appStoreId && <meta property="al:ios:app_store_id" content={app.ios.appStoreId} />}
			{app?.android?.package && <meta property="al:android:package" content={app.android.package} />}
			{app?.android?.url && <meta property="al:android:url" content={app.android.url} />}
			{share?.url && <meta property="al:web:url" content={share.url} />}
			{app?.name && (
				<>
					<meta property="al:ios:app_name" content={app.name} />
					<meta property="al:android:app_name" content={app.name} />
				</>
			)}
		</>
	)

	return (
		<>
			{PrimaryMetaTags}
			{FacebookMetaTags}
			{TwitterMetaTags}
			{SecondaryMetaTags}
			{AppMetaTags}
		</>
	)
}

export default MetaTag
