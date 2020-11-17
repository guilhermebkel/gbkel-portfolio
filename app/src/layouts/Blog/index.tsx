import React from "react"
import Head from "next/head"

import {
	BlogContainer
} from "@/layouts/Blog/styles"

import { buildCDNUrl } from "@/lib/cdn"

const BlogLayout: React.FC = (props) => {
	const { children } = props

	return (
		<BlogContainer>
			<Head>
				<title>Blog | Guilherme Mota</title>
				<meta name="description" content="All content shared by Guilherme Mota."/>
				<meta property="og:image" content={buildCDNUrl("/favicon.png")} />
			</Head>

			{children}
		</BlogContainer>
	)
}

export default BlogLayout
