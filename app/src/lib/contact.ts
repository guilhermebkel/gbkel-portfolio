type ContactType = "github" | "linkedin" | "mail" | "whatsapp"

type ContactMap = {
	[type in ContactType ]: {
		iconSrc: string
		url: string
		rawValue?: string
		alt: string
	}
}

export const contactMap: ContactMap = {
	github: {
		iconSrc: "/icons/github.svg",
		url: "https://github.com/guilhermebkel",
		alt: "github"
	},
	linkedin: {
		iconSrc: "/icons/linkedin.svg",
		url: "https://www.linkedin.com/in/guilhermebkel",
		alt: "linkedin"
	},
	mail: {
		iconSrc: "/icons/mail.svg",
		url: "mailto:guilhermebromonschenkel@gmail.com",
		rawValue: "guilhermebromonschenkel@gmail.com",
		alt: "mail"
	},
	whatsapp: {
		iconSrc: "/icons/whatsapp.svg",
		url: "https://api.whatsapp.com/send?phone=5527996334936",
		rawValue: "+55 (27) 99633-4936",
		alt: "whatsapp"
	}
}
