import React from "react"

import { DetailedPost } from "@/lib/posts"
import { appUrls } from "@/lib/personal"

import {
	PostSingleSectionContainer,
	PostSingleSectionContent,
	PostInfo,
	PostCover,
	PostContent,
	PostComments
} from "@/views/Blog/PostSingle/styles"

type PostSingleProps = {
	post: DetailedPost
}

const PostSingle: React.FC<PostSingleProps> = (props) => {
	const { post } = props

	const postUrl = `${appUrls.blog}/${post.slug}`

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

				<PostComments
					pageUrl={postUrl}
					pageId={post.slug}
				/>
			</PostSingleSectionContent>
		</PostSingleSectionContainer>
	)
}

export default PostSingle
