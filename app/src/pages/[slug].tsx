import React from "react"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"

import {
	getAllDetailedPosts,
	getDetailedPostBySlug,
	DetailedPost
} from "@/lib/posts"

import BlogPostLayout from "@/layouts/BlogPost"

import PostSingleSection from "@/views/Blog/PostSingle"

type PostProps = {
	post: DetailedPost
}

const Post: NextPage<PostProps> = (props) => {
	const { post } = props

	return (
		<BlogPostLayout
			title={post.title}
			description={post.description}
			coverSrc={post.coverSrc}
			slug={post.slug}
			date={post.date}
			readingTime={post.readingTime}
			authorName={post.authorName}
			authorUrl={post.authorUrl}
		>
			<PostSingleSection
				post={post}
			/>
		</BlogPostLayout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllDetailedPosts()

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
