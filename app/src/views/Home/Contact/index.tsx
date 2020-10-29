import React from "react"

import {
	Summary,
	Icon
} from "@/components"

import {
	ContactSectionContainer,
	ContactSectionContent,
	ContactInfoContainer,
	ContactInfoContent,
	ContactInfoLink
} from "@/views/Home/Contact/styles"

import { contactMap } from "@/lib/personal"

const ContactSection: React.FC = () => (
	<ContactSectionContainer>
		<ContactSectionContent>
			<Summary
				spotlightWidth="230px"
				type="Contact"
				title="Contact."
				description="Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
			/>

			<ContactInfoContainer>
				<ContactInfoContent>
					<Icon
						src={contactMap.mail.iconSrc}
						alt={contactMap.mail.alt}
					/>

					<ContactInfoLink
						href={contactMap.mail.url}
						target="_blank"
						rel="noopener"
					>
						{contactMap.mail.rawValue}
					</ContactInfoLink>
				</ContactInfoContent>
				
				<ContactInfoContent>
					<Icon
						src={contactMap.whatsapp.iconSrc}
						alt={contactMap.whatsapp.alt}
					/>

					<ContactInfoLink
						href={contactMap.whatsapp.url}
						target="_blank"
						rel="noopener"
					>
						{contactMap.whatsapp.rawValue}
					</ContactInfoLink>
				</ContactInfoContent>
			</ContactInfoContainer>
		</ContactSectionContent>
	</ContactSectionContainer>
)

export default ContactSection
