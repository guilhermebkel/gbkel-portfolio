import React from "react"
import Head from "next/head"

import {
	BlogContainer
} from "@/layouts/Blog/styles"

import { MetaTag } from "@/components"

import { buildCDNUrl } from "@/lib/cdn"
import { appUrls } from "@/lib/personal"

const BlogLayout: React.FC = (props) => {
	const { children } = props

	const title = "Blog | Guilherme Mota"
	const description = "All content shared by Guilherme Mota."

	return (
		<BlogContainer>
			<Head>
				<MetaTag
					page={{
						title,
						description
					}}
					share={{
						title,
						description,
						imageSrc: buildCDNUrl("/favicon.png"),
						url: appUrls.blog,
						type: "website"
					}}
				/>
			</Head>

			{children}
		</BlogContainer>
	)
}

export default BlogLayout
