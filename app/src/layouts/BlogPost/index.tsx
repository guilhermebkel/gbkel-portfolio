import React from "react"
import Head from "next/head"

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
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = (props) => {
	const {
		children,
		description,
		coverSrc,
		title,
		slug
	} = props

	const imageSrc = buildImageSharePath(coverSrc)

	return (
		<BlogPostContainer>
			<Head>
				<MetaTag
					description={description}
					imageSrc={imageSrc}
					title={`${title} | Guilherme Mota`}
					url={`${appUrls.blog}/${slug}`}
				/>
			</Head>

			{children}
		</BlogPostContainer>
	)
}

export default BlogPostLayout
