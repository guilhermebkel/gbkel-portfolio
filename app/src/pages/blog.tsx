import React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps } from "next"

import { getAllPosts, PostPreview } from "@/lib/posts"

import DefaultLayout from "@/layouts/Default"

type BlogProps = {
	posts: PostPreview[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	return (
		<DefaultLayout>
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
		</DefaultLayout>
	)
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllPosts()

	return {
		props: {
			posts
		}
	}
}
