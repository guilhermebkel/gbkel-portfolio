import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Container, SocialMedias, SocialLink } from "./styles"

import { social } from "../../../config/metadata"

const Footer = () => {
  const socialMediasMap = {}
  social.map(media => (socialMediasMap[media.name] = media.url))

  return (
    <Container>
      <SocialMedias>
        <SocialLink href={socialMediasMap["linkedin"]} target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin"]} color="#FFF" size="1x" />
        </SocialLink>

        <SocialLink href={socialMediasMap["github"]} target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} color="#FFF" size="1x" />
        </SocialLink>

        <SocialLink href={socialMediasMap["gitlab"]} target="_blank">
          <FontAwesomeIcon icon={["fab", "gitlab"]} color="#FFF" size="1x" />
        </SocialLink>

        <SocialLink href={socialMediasMap["npm"]} target="_blank">
          <FontAwesomeIcon icon={["fab", "npm"]} color="#FFF" size="1x" />
        </SocialLink>

        <SocialLink href={socialMediasMap["wakatime"]} target="_blank">
          <FontAwesomeIcon icon="clock" color="#FFF" size="1x" />
        </SocialLink>

        <SocialLink href={socialMediasMap["whatsapp"]} target="_blank">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} color="#FFF" size="1x" />
        </SocialLink>

        <SocialLink href={socialMediasMap["stackoverflow"]} target="_blank">
          <FontAwesomeIcon
            icon={["fab", "stack-overflow"]}
            color="#FFF"
            size="1x"
          />
        </SocialLink>
      </SocialMedias>
    </Container>
  )
}

export default Footer
