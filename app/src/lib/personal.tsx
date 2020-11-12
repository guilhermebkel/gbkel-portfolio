import React from "react"

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
		url: "https://github.guilherr.me",
		alt: "github"
	},
	linkedin: {
		iconSrc: "/icons/linkedin.svg",
		url: "https://linkedin.guilherr.me",
		alt: "linkedin"
	},
	mail: {
		iconSrc: "/icons/mail.svg",
		url: "https://mail.guilherr.me",
		rawValue: "guilhermebromonschenkel@gmail.com",
		alt: "mail"
	},
	whatsapp: {
		iconSrc: "/icons/whatsapp.svg",
		url: "https://whatsapp.guilherr.me",
		rawValue: "+55 (27) 99633-4936",
		alt: "whatsapp"
	}
}

type Timeline = {
	title: string
	subtitle: string
	description: JSX.Element | string
	iconSrc?: string
	date: string
}

export const timeline: Timeline[] = [
	{
		title: "UFES",
		subtitle: "Introduction to Computing [Course]",
		description: (
			<>
				It was the first time I have been in touch with programming.
				<br />
				<br />
				In this course I have learned the basics about <u>C Language</u> and got mad multiple times
				since I was creating a lot of bugs because of bad code writing. 😂
				<br />
				<br />
				In the end I have made a <u>2048 Game</u> with lot of bugs, but feeling awesome for creating something. 🤩
			</>
		),
		date: "06/2014 - 12/2014",
		iconSrc: "/icons/ufes.png"
	},
	{
		title: "UFMG",
		subtitle: "Electrical Engineering [College]",
		description: (
			<>
				Since my brother/cousin are in the tech world (and they are kind of an inspiration to me), I have chosen this course since they have done it too. 🤘
				<br />
				<br />
				I am currently at college and almost every month I am able to learn with awesome students. 🤯
			</>
		),
		date: "03/2019 - In course",
		iconSrc: "/icons/ufmg.png"
	},
	{
		title: "IBESVA",
		subtitle: "Front-end Developer [Volunteer]",
		description: (
			<>
				That is a non-governmental organization that helps the education cause and was my first time creating something with programming to someone. 👨‍🎓 
				<br />
				<br />
				I have learned too much about <u>HTML/CSS</u> and <u>Dealing with stakeholders</u>.
				<br />
				<br />
				All the project made me really happy since I was helping a cause and getting people happy using programming. 😁
			</>
		),
		date: "03/2019 - 10/2019",
		iconSrc: "/icons/ibesva.png"
	},
	{
		title: "PICSIZE",
		subtitle: "Full-stack Developer [Intern]",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "06/2019 - 12/2019",
		iconSrc: "/icons/picsize.png"
	},
	{
		title: "PICSIZE",
		subtitle: "Full-stack Developer [Job]",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "12/2019 - 08/2020",
		iconSrc: "/icons/picsize.png"
	},
	{
		title: "PICSIZE",
		subtitle: "Tech Lead [Job]",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "08/2020 - In course",
		iconSrc: "/icons/picsize.png"
	}
]