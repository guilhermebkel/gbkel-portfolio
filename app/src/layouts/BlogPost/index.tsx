import React from "react"
import Head from "next/head"

import {
	BlogPostContainer
} from "@/layouts/BlogPost/styles"

import { MetaTag } from "@/components"

import { buildImageSharePath } from "@/lib/image"
import { appUrls, contactMap } from "@/lib/personal"

type BlogPostLayoutProps = {
	slug: string
	title: string
	description: string
	coverSrc: string
	date: string
	readingTime: string
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = (props) => {
	const {
		children,
		description,
		coverSrc,
		title,
		slug,
		date,
		readingTime
	} = props

	const imageSrc = buildImageSharePath(coverSrc)

	return (
		<BlogPostContainer>
			<Head>
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
						authorName: "Guilherme Mota",
						authorUrl: contactMap.github.url,
						type: "article",
						publishDate: date,
						readingTime
					}}
				/>
			</Head>

			{children}
		</BlogPostContainer>
	)
}

export default BlogPostLayout
