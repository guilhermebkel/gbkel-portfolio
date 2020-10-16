import matter from "gray-matter"
import marked from "marked"
import fs from "fs"
import path from "path"
import readingTime from "reading-time"

const POST_FOLDER_PATH = path.join(process.cwd(), "src", "posts")

export type DetailedPost = {
	title: string
	description: string
	thumbnailUrl: string
	content: string
	readingTime: string
	date: string
}

export const getDetailedPostBySlug = async (slug: string): Promise<DetailedPost> => {
	const postFilePath = path.join(POST_FOLDER_PATH, `${slug}.md`)
	const postFileContent = await fs.promises.readFile(postFilePath, "utf8")

	const meta = matter(postFileContent)
	const content = marked(meta.content)

	const thumbnailUrl = `/thumbnail/${slug}.png`

	const readingTimeTextInfo = readingTime(content)

	return {
		title: meta.data.title,
		description: meta.data.description || "",
		date: meta.data.date,
		readingTime: readingTimeTextInfo.text,
		thumbnailUrl,
		content
	}
}

export type PostPreview = {
	slug: string
	title: string
	date: string
	url: string
}

export const getAllPostPreviews = async (): Promise<PostPreview[]> => {
	const postFileNames = await fs.promises.readdir(POST_FOLDER_PATH)
	
	const postPreviews: PostPreview[] = await Promise.all(
		postFileNames.map(async postFileName => {
			const slug = postFileName.replace(".md", "")

			const post = await getDetailedPostBySlug(slug)
	
			return {
				title: post.title,
				date: post.date,
				url: slug,
				slug
			}
		})
	)

	return postPreviews
}
