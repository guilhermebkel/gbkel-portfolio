import React from "react"

import {
	BlogPostContainer
} from "@/layouts/BlogPost/styles"

import { MetaTag, Script } from "@/components"

import { buildImageSharePath } from "@/lib/image"
import { appUrls } from "@/lib/personal"

type BlogPostLayoutProps = {
	slug: string
	title: string
	description: string
	coverSrc: string
	date: string
	readingTime: string
	authorName: string
	authorUrl: string
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = (props) => {
	const {
		children,
		description,
		coverSrc,
		title,
		slug,
		date,
		readingTime,
		authorName,
		authorUrl
	} = props

	const imageSrc = buildImageSharePath(coverSrc)

	const postUrl = `${appUrls.blog}/${slug}`

	return (
		<BlogPostContainer>
			<Script src="/js/jquery-3.3.1.min.js" />
			<Script src="/js/jquery.fancybox.min.js" />
			<link rel="stylesheet" type="text/css" href="/css/jquery.fancybox.min.css" />

			<MetaTag
				page={{
					title: `${title} | Guilherme Mota`,
					description,
				}}
				share={{
					title,
					description,
					imageSrc,
					url: postUrl,
					authorName,
					authorUrl,
					type: "article",
					publishDate: date,
					readingTime
				}}
			/>

			{children}
		</BlogPostContainer>
	)
}

export default BlogPostLayout
