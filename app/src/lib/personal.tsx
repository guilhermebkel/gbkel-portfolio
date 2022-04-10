import React from "react"

import { environmentConfig } from "@/config/environment"

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
				I am currently at college and happy for studying with awesome students. 🤯
			</>
		),
		date: "03/2019 - 10/2021",
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
		description: (
			<>
				That is an organization with sass software that started at the photography ecosystem but whenever possible tries to get into another contexts. 
				<br />
				<br />
				I had the pleasure of being in touch with senior developers and <u>learned a lot technically/personally with them</u>. 🤯
				<br />
				<br />
				In the end, I was able to finish a project called <u>Gallery Pro</u> and it helped me pushing almost all boundaries as an intern. 🥳
			</>
		),
		date: "06/2019 - 12/2019",
		iconSrc: "/icons/picsize.png"
	},
	{
		title: "PICSIZE",
		subtitle: "Full-stack Developer [Job]",
		description: (
			<>
				After 6 months of internship I have got invited to get a position as a Full-time Full-stack developer. 🥳
				<br />
				<br />
				At this new position, I helped the organization decreasing costs on cloud and worked on a project called <u>Site Pro</u>.
				<br />
				<br />
				In the end, I did improve a lot more personally/technically when comparing to the <u>old 6 months (fresh new full-time job) me</u>. 🤩
			</>
		),
		date: "12/2019 - 08/2020",
		iconSrc: "/icons/picsize.png"
	},
	{
		title: "PICSIZE",
		subtitle: "Tech Lead [Job]",
		description: (
			<>
				So, after being mainly a software developer, I have got invited to be a Tech Lead. 🥳
				<br />
				<br />
				At this position I helped <u>creating solid/scalable/flexible software foundations, helping other developers improving themselves and bringing new technologies to company</u>. 💪
			</>
		),
		date: "08/2020 - 03/2021",
		iconSrc: "/icons/picsize.png"
	},
	{
		title: "Bume",
		subtitle: "Tech Lead [Job]",
		description: (
			<>
				After a company merge, I've become a Tech Lead on that company. 🎉
				<br />
				<br />
				At this position I had the opportunity to <u>learn a lot about microservices and messaging systems</u> while <u>giving feedbacks to improve other developers</u>.
			</>
		),
		date: "03/2021 - 07/2021",
		iconSrc: "/icons/bume.png"
	},
	{
		title: "Letalk",
		subtitle: "Tech Lead [Job]",
		description: (
			<>
				After a company creation, I had the opportunity to join this new challenge. 🚀
			</>
		),
		date: "07/2021 - In course",
		iconSrc: "/icons/letalk.svg"
	},
	{
		title: "ITuring",
		subtitle: "Mentor and Project Reviewer [Job]",
		description: (
			<>
				One of my passions is mentoring. 👨🏽‍🏫
				<br />
				<br />
				So I had the pleasure of taking part of that education company as a freelance mentor and project reviewer for one of its courses.
			</>
		),
		date: "08/2021 - In course",
		iconSrc: "/icons/ituring.jpg"
	},
	{
		title: "UFMG",
		subtitle: "Information System [College]",
		description: (
			<>
				Since I've felt in love with software after I've got into the Electrical Engineering course, I changed it to Information System since it focuses on what I love to do. 💓
			</>
		),
		date: "10/2021 - In course",
		iconSrc: "/icons/ufmg.png"
	}
]

export const appUrls = {
	home: "https://guilherr.me",
	blog: "https://blog.guilherr.me",
	about: "https://about.guilherr.me",
	skills: "https://about.guilherr.me/skills"
}

export const authors = {
	Owner: {
		name: "Guilherme Mota",
		avatarSrc: "/images/mini-avatar.png",
		url: contactMap.github.url
	}
}
