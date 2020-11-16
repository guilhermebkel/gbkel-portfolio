import React from "react"
import { GetStaticProps, NextPage } from "next"

import { getAllPostPreviews, PostPreview } from "@/lib/posts"

import BlogLayout from "@/layouts/Blog"

import PostListSection from "@/views/Blog/sections/PostList"

type BlogProps = {
	posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = (props) => {
	const { posts } = props

	return (
		<BlogLayout>
			<PostListSection posts={posts} />
		</BlogLayout>
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
