type ContactType = "github" | "linkedin" | "mail" | "whatsapp"

type ContactMap = {
	[type in ContactType]: {
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

type Timeline = {
	title: string
	subtitle: string
	description: string
	iconSrc?: string
	date: string
}

export const timeline: Timeline[] = [
	{
		title: "UFES",
		subtitle: "Introduction to Computing Course",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "06/2014 - 12/2014"
	},
	{
		title: "UFMG",
		subtitle: "Electrical Engineering",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "03/2019 - In course"
	},
	{
		title: "PICSIZE",
		subtitle: "Full-stack Development Intern",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "06/2019 - 12-2019"
	}
]