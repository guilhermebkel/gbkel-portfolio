import React from "react"

import {
	AuthorContainer,
	AuthorName,
	Avatar,
	ExtraInfo,
	DetailsContainer
} from "@/views/Blog/components/Author/styles"

type AuthorProps = {
	name: string
	avatarSrc: string
	postDate: Date | string
	readingTime: string
}

const Author: React.FC<AuthorProps> = (props) => {
	const { name, avatarSrc, postDate, readingTime } = props

	return (
		<AuthorContainer>
			<Avatar
				src={avatarSrc}
				alt="avatar"
			/>

			<DetailsContainer>
				<AuthorName>
					{name}
				</AuthorName>

				<ExtraInfo>
					{postDate} - {readingTime}
				</ExtraInfo>
			</DetailsContainer>
		</AuthorContainer>
	)
}

export default Author
