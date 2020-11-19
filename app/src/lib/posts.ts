import matter from "gray-matter"
import marked from "marked"
import fs from "fs"
import path from "path"
import readingTime from "reading-time"

import { getShortDate } from "@/lib/date"

const POST_FOLDER_PATH = path.join(process.cwd(), "src", "posts")

export type DetailedPost = {
	title: string
	description: string
	coverSrc: string
	tags: string[]
	readingTime: string
	date: string
	shortDate: string
	dateInMilliseconds: number
	content: string
	published: boolean
	slug: string
}

export const getDetailedPostBySlug = async (slug: string): Promise<DetailedPost> => {
	const postFilePath = path.join(POST_FOLDER_PATH, `${slug}.md`)
	const postFileContent = await fs.promises.readFile(postFilePath, "utf8")

	const meta = matter(postFileContent)
	const content = marked(meta.content)

	const { date } = meta.data

	const shortDate = getShortDate(new Date(date))
	const dateInMilliseconds = +new Date(date)

	const readingTimeTextInfo = readingTime(content)

	return {
		title: meta.data.title || "",
		description: meta.data.description || "",
		date,
		shortDate,
		dateInMilliseconds,
		tags: meta.data.tags || [],
		readingTime: readingTimeTextInfo.text || "",
		published: meta.data.published || false,
		coverSrc: meta.data.cover || "",
		content,
		slug
	}
}

export type PostPreview = Partial<DetailedPost>

export const getAllPostPreviews = async (): Promise<PostPreview[]> => {
	const postFileNames = await fs.promises.readdir(POST_FOLDER_PATH)
	
	const postPreviews: PostPreview[] = await Promise.all(
		postFileNames.map(async postFileName => {
			const slug = postFileName.replace(".md", "")

			const post = await getDetailedPostBySlug(slug)
	
			return {
				title: post.title,
				description: post.description || "",
				shortDate: post.shortDate,
				dateInMilliseconds: post.dateInMilliseconds,
				tags: post.tags,
				readingTime: post.readingTime,
				coverSrc: post.coverSrc,
				published: post.published,
				slug
			}
		})
	)

	return postPreviews
}
