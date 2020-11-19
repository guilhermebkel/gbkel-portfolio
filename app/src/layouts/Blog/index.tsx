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

	return (
		<BlogContainer>
			<Head>
				<MetaTag
					description="All content shared by Guilherme Mota."
					imageSrc={buildCDNUrl("/favicon.png")}
					title="Blog | Guilherme Mota"
					url={appUrls.blog}
				/>
			</Head>

			{children}
		</BlogContainer>
	)
}

export default BlogLayout
