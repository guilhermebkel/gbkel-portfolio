import React from "react"
import Link from "next/link"

import { DetailedPost } from "@/lib/posts"
import { chunk, orderBy } from "@/lib/array"

import {
	Summary,
	PostInfo
} from "@/components"

import {
	PostListSectionContainer,
	PostListSectionContent,
	PostCover,
	PostItemContainer,
	PostItemContent,
	PostsContainer,
	PostsContent,
	PostDivider
} from "@/views/Blog/PostList/styles"

type PostListProps = {
	posts: DetailedPost[]
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
					{posts
						.sort(orderBy<DetailedPost>("dateInMilliseconds", "ASC"))
						.reverse()
						.reduce(chunk<DetailedPost[][], DetailedPost>(3), [])
						.reverse()
						.map((postChunk, index) => (
							<React.Fragment
								key={index}
							>
								<PostsContent
									postsCount={postChunk.length}
								>
									{
										postChunk
											.filter(post => post.published)
											.map((post) => (
												<PostItemContainer
													key={post.slug}
												>
													<Link
														key={post.slug}
														href={post.slug}
														passHref
													>
														<PostItemContent
															postsCount={postChunk.length}
														>
															<PostCover
																src={post.coverSrc}
																alt={post.title}
															/>
				
															<PostInfo
																date={post.shortDate}
																description={post.description}
																readingTime={post.readingTime}
																tags={post.tags}
																title={post.title}
																authorName={post.authorName}
																authorAvatarSrc={post.authorAvatarSrc}
															/>
														</PostItemContent>
													</Link>
												</PostItemContainer>
											))
									}
								</PostsContent>

								<PostDivider />
							</React.Fragment>
						))}
				</PostsContainer>
			</PostListSectionContent>
		</PostListSectionContainer>
	)
}

export default PostList
