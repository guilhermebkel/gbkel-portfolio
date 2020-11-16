import React from "react"
import Link from "next/link"

import { PostPreview } from "@/lib/posts"

import {
	Summary
} from "@/components"

import Author from "@/views/Blog/components/Author"

import {
	PostListSectionContainer,
	PostListSectionContent,
	PostCover,
	PostDescription,
	PostItem,
	PostsContainer,
	PostsContent,
	PostTagContainer,
	PostTag,
	PostTitle
} from "@/views/Blog/sections/PostList/styles"

type PostListProps = {
	posts: PostPreview[]
}

const PostList: React.FC<PostListProps> = (props) => {
	const { posts } = props

	return (
		<PostListSectionContainer>
			<PostListSectionContent>
				<Summary
					spotlightWidth="150px"
					type="Knowledge"
					title="Blog."
					description="Some content I like to share with other people in other to learn something new by myself."
				/>

				<PostsContainer>
					<PostsContent>
						{posts
							.filter(post => post.published)
							.map((post) => (
								<Link
									key={post.url}
									href={post.url}
									passHref
								>
									<PostItem>
										<PostCover
											src={post.coverSrc}
											alt={post.title}
										/>

										{post.tags.length > 0 && (
											<PostTagContainer>
												{post.tags.map(tag => (
													<PostTag key={tag}>
														{tag.toUpperCase()}
													</PostTag>
												))}
											</PostTagContainer>
										)}

										<PostTitle>
											{post.title}
										</PostTitle>

										<PostDescription>
											{post.description}
										</PostDescription>

										<Author
											avatarSrc="/images/mini-avatar.png"
											name="Guilherme Mota"
											postDate={post.date}
											readingTime={post.readingTime}
										/>
									</PostItem>
								</Link>
							))}
					</PostsContent>
				</PostsContainer>
			</PostListSectionContent>
		</PostListSectionContainer>
	)
}

export default PostList
