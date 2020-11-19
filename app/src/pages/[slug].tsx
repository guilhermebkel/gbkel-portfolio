import React from "react"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"

import {
	getAllPostPreviews,
	getDetailedPostBySlug,
	DetailedPost
} from "@/lib/posts"

import BlogPostLayout from "@/layouts/BlogPost"

import { buildImageSharePath } from "@/lib/image"
import { appUrls } from "@/lib/personal"

import PostSingleSection from "@/views/Blog/sections/PostSingle"

type PostProps = {
	post: DetailedPost
}

const Post: NextPage<PostProps> = (props) => {
	const { post } = props

	const imageSharePath = buildImageSharePath(post.coverSrc)

	return (
		<BlogPostLayout
			title={`${post.title} | Guilherme Mota`}
			description={post.description}
			imageSrc={imageSharePath}
			url={`${appUrls.blog}/${post.slug}`}
		>
			<PostSingleSection post={post} />
		</BlogPostLayout>
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
