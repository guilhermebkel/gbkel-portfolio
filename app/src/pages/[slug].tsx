import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"

import DefaultLayout from "@/layouts/Default"

import { getAllPosts, getPostBySlug, PresentablePost } from "@/lib/posts"

type PostProps = {
	post: PresentablePost
}

const Post: React.FC<PostProps> = (props) => {
	const { post } = props

	return (
		<DefaultLayout>
			<Head>
				<title>{post.title} | Guilherme Mota</title>

				<meta name="description" content={post.description} />

				<meta property="og:site_name" content="Blog do Diego" />

				<meta property="og:title" content={post.title} />
				<meta property="og:description" content={post.description} />

				<meta property="og:image" content={post.thumbnailUrl} />
				<meta property="og:image:type" content="image/png" />

				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={post.title} />
				<meta name="twitter:description" content={post.description} />
				<meta name="twitter:image" content={post.thumbnailUrl} />
			</Head>
			<article>
				<h1>{post.title}</h1>
				<img src={post.thumbnailUrl} alt={post.title} />
				<div>
					{post.date}
				</div>
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</article>
		</DefaultLayout>
	)
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPosts()

	const paths = posts.map(post => ({ params: { slug: post.slug } }))

	return {
		paths: paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getPostBySlug(params.slug as string)

	return {
		props: {
			post
		}
	}
}
