import React from "react"
import Head from "next/head"

import {
	BlogContainer
} from "@/layouts/Blog/styles"

const BlogLayout: React.FC = (props) => {
	const { children } = props

	return (
		<BlogContainer>
			<Head>
				<title>Blog | Guilherme Mota</title>
			</Head>

			{children}
		</BlogContainer>
	)
}

export default BlogLayout
