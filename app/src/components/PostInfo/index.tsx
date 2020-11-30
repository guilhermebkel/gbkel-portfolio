import React from "react"

import {
	PostDescription,
	PostTagContainer,
	PostTag,
	PostTitle,
	PostInfoContainer,
	Avatar,
	DetailsContainer,
	ExtraInfo,
	PostAuthorContainer,
	PostAuthorName
} from "@/components/PostInfo/styles"

type PostInfoProps = {
	tags: string[]
	title: string
	description: string
	date: string
	readingTime: string
	authorName: string
	authorAvatarSrc: string
}

const PostInfo: React.FC<PostInfoProps> = (props) => {
	const {
		tags,
		title,
		readingTime,
		description,
		date,
		authorName,
		authorAvatarSrc,
		...otherProps
	} = props

	return (
		<PostInfoContainer {...otherProps}>
			{tags.length > 0 && (
				<PostTagContainer>
					{tags.map(tag => (
						<PostTag key={tag}>
							{tag.toUpperCase()}
						</PostTag>
					))}
				</PostTagContainer>
			)}
	
			<PostTitle>
				{title}
			</PostTitle>
	
			<PostDescription>
				{description}
			</PostDescription>

			<PostAuthorContainer>
				<Avatar
					src={authorAvatarSrc}
					alt="author avatar"
				/>

				<DetailsContainer>
					<PostAuthorName>
						{authorName}
					</PostAuthorName>

					<ExtraInfo>
						{date} - {readingTime}
					</ExtraInfo>
				</DetailsContainer>
			</PostAuthorContainer>
		</PostInfoContainer>
	)
}

export default PostInfo
