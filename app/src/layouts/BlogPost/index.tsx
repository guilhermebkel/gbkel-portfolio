import React from "react"

import {
	BlogPostContainer
} from "@/layouts/BlogPost/styles"

import { MetaTag } from "@/components"

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

	return (
		<BlogPostContainer>
			<MetaTag
				page={{
					title: `${title} | Guilherme Mota`,
					description,
				}}
				share={{
					title,
					description,
					imageSrc,
					url: `${appUrls.blog}/${slug}`,
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
