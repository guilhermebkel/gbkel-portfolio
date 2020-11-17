import React from "react"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import Head from "next/head"

import {
	getAllPostPreviews,
	getDetailedPostBySlug,
	DetailedPost
} from "@/lib/posts"

import { buildImageSharePath } from "@/lib/image"

import PostSingleSection from "@/views/Blog/sections/PostSingle"

type PostProps = {
	post: DetailedPost
}

const Post: NextPage<PostProps> = (props) => {
	const { post } = props

	const imageSharePath = buildImageSharePath(post.coverSrc)

	return (
		<>
			<Head>
				<title>{post.title} | Guilherme Mota</title>

				<meta name="description" content={post.description} />

				<meta property="og:site_name" content="Blog do Mota" />

				<meta property="og:title" content={post.title} />
				<meta property="og:description" content={post.description} />

				<meta property="og:image" content={imageSharePath} />
				<meta property="og:image:type" content="image/png" />

				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={post.title} />
				<meta name="twitter:description" content={post.description} />
				<meta name="twitter:image" content={imageSharePath} />
			</Head>

			<PostSingleSection post={post} />
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPostPreviews()

	const paths = posts.map(post => ({ params: { slug: post.slug } }))

	return {
		paths: paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getDetailedPostBySlug(params.slug as string)

	return {
		props: {
			post
		}
	}
}

export default Post
