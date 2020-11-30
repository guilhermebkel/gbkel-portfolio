import React from "react"

import { DetailedPost } from "@/lib/posts"

import {
	PostSingleSectionContainer,
	PostSingleSectionContent,
	PostInfo,
	PostCover,
	PostContent
} from "@/views/Blog/PostSingle/styles"

type PostSingleProps = {
	post: DetailedPost
}

const PostSingle: React.FC<PostSingleProps> = (props) => {
	const { post } = props

	return (
		<PostSingleSectionContainer>
			<PostSingleSectionContent>
				<PostInfo 
					date={post.shortDate}
					description={post.description}
					readingTime={post.readingTime}
					tags={post.tags}
					title={post.title}
					authorName={post.authorName}
					authorAvatarSrc={post.authorAvatarSrc}
				/>

				<PostCover
					src={post.coverSrc}
					alt={post.title}
				/>

				<PostContent
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</PostSingleSectionContent>
		</PostSingleSectionContainer>
	)
}

export default PostSingle
