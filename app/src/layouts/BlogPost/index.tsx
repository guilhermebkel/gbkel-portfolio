import React from "react"
import Head from "next/head"

import {
	BlogPostContainer
} from "@/layouts/BlogPost/styles"

import { MetaTag } from "@/components"

type BlogPostLayoutProps = {
	url: string
	title: string
	description: string
	imageSrc: string
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = (props) => {
	const {
		children,
		description,
		imageSrc,
		title,
		url
	} = props

	return (
		<BlogPostContainer>
			<Head>
				<MetaTag
					description={description}
					imageSrc={imageSrc}
					title={title}
					url={url}
				/>
			</Head>

			{children}
		</BlogPostContainer>
	)
}

export default BlogPostLayout
