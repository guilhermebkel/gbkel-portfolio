import React from "react"
import { GetStaticProps, NextPage } from "next"

import { getAllDetailedPosts, DetailedPost } from "@/lib/posts"

import BlogLayout from "@/layouts/Blog"

import PostListSection from "@/views/Blog/PostList"

type BlogProps = {
	posts: DetailedPost[]
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
	const posts = await getAllDetailedPosts()

	return {
		props: {
			posts
		}
	}
}

export default Blog
