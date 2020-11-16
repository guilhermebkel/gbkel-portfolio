import React from "react"
import Link from "next/link"

import { PostPreview } from "@/lib/posts"
import { chunk, orderBy } from "@/lib/array"

import {
	Summary
} from "@/components"

import Author from "@/views/Blog/components/Author"

import {
	PostListSectionContainer,
	PostListSectionContent,
	PostCover,
	PostDescription,
	PostItemContainer,
	PostItemContent,
	PostsContainer,
	PostsContent,
	PostTagContainer,
	PostTag,
	PostTitle,
	PostDivider,
	PostInfoContainer
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
					{posts
						.sort(orderBy<PostPreview>("dateInMilliseconds", "ASC"))
						.reverse()
						.reduce(chunk<PostPreview[][], PostPreview>(3), [])
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
													key={post.url}
												>
													<Link
														key={post.url}
														href={post.url}
														passHref
													>
														<PostItemContent
															postsCount={postChunk.length}
														>
															<PostCover
																src={post.coverSrc}
																alt={post.title}
															/>
				
															<PostInfoContainer>
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
															</PostInfoContainer>
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
