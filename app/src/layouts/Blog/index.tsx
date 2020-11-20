import React from "react"

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

			{children}
		</BlogContainer>
	)
}

export default BlogLayout
