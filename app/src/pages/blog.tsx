import React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps, NextPage } from "next"

import { getAllPostPreviews, PostPreview } from "@/lib/posts"

type BlogProps = {
	posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = (props) => {
	const { posts } = props

	return (
		<>
			<Head>
				<title>Blog | Guilherme Mota</title>
			</Head>
			<section>
				<p>
					...
				</p>
			</section>
			<section>
				<h2>Blog</h2>
				<ul>
					{posts.map((post) => (
						<li key={post.slug}>
							<Link href={post.url}>
								{post.title}
							</Link>
							<br />
							<small>
								{post.date}
							</small>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllPostPreviews()

	return {
		props: {
			posts
		}
	}
}

export default Blog
