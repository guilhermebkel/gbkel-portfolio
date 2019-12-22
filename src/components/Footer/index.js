import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Container, Languages, SocialMedias, SocialLink } from "./styles"

import { social } from "../../../config/metadata"

const Footer = () => {
	const socialMediasMap = {}
	social.map(media => socialMediasMap[media.name] = media.url)

	return (
		<Container>
			<Languages>
				<b>Pt.</b> En.
			</Languages>
			<SocialMedias>
				<SocialLink href={socialMediasMap["linkedin"]} target="_blank">
					<FontAwesomeIcon icon={["fab", "linkedin"]} color="#FFF" size="lg" />
				</SocialLink>

				<SocialLink href={socialMediasMap["github"]} target="_blank">
					<FontAwesomeIcon icon={["fab", "github"]} color="#FFF" size="lg" />
				</SocialLink>

				<SocialLink href={socialMediasMap["gitlab"]} target="_blank">
					<FontAwesomeIcon icon={["fab", "gitlab"]} color="#FFF" size="lg" />
				</SocialLink>

				<SocialLink href={socialMediasMap["npm"]} target="_blank">
					<FontAwesomeIcon icon={["fab", "npm"]} color="#FFF" size="lg" />
				</SocialLink>

				<SocialLink href={socialMediasMap["wakatime"]} target="_blank">
					<FontAwesomeIcon icon="clock" color="#FFF" size="lg" />
				</SocialLink>

				<SocialLink href={socialMediasMap["whatsapp"]} target="_blank">
					<FontAwesomeIcon icon={["fab", "whatsapp"]} color="#FFF" size="lg" />
				</SocialLink>

				<SocialLink href={socialMediasMap["stackoverflow"]} target="_blank">
					<FontAwesomeIcon icon={["fab", "stack-overflow"]} color="#FFF" size="lg" />
				</SocialLink>
			</SocialMedias>
		</Container>
	)
}

export default Footer
