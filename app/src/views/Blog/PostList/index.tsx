import React from "react"

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
	PostDivider,
	PostLink
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
					description="Some contents I have learned during my career (sometimes stuffs I was curious to learn and teach other people)."
				/>

				<PostsContainer>
					{posts
						.filter(post => post.published)
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
											.map((post) => (
												<PostItemContainer
													key={post.slug}
												>
													<PostLink
														href={post.slug}
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
													</PostLink>
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
