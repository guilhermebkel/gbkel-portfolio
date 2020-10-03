import matter from "gray-matter"
import marked from "marked"
import fs from "fs"
import path from "path"

const POST_FOLDER_PATH = path.join(process.cwd(), "src", "posts")

export type PostPreview = {
	slug: string
	title: string
	date: string
	url: string
}

export const getAllPosts = async (): Promise<PostPreview[]> => {
	const postFileNames = await fs.promises.readdir(POST_FOLDER_PATH)
	
	const posts: PostPreview[] = await Promise.all(
		postFileNames.map(async postFileName => {
			const postFilePath = path.join(POST_FOLDER_PATH, postFileName)
			const postFileContent = await fs.promises.readFile(postFilePath, "utf8")
	
			const meta = matter(postFileContent)
	
			const slug = postFileName.replace(".md", "")
	
			return {
				title: meta.data.title,
				date: meta.data.date,
				url: slug,
				slug
			}
		})
	)

	return posts
}

export type PresentablePost = {
	title: string
	description: string
	thumbnailUrl: string
	content: string
	date: string
}

export const getPostBySlug = async (slug: string): Promise<PresentablePost> => {
	const postFilePath = path.join(POST_FOLDER_PATH, `${slug}.md`)
	const postFileContent = fs.readFileSync(postFilePath, "utf8")

	const meta = matter(postFileContent)
	const content = marked(meta.content)

	const thumbnailUrl = `/thumbnail/${slug}.png`

	return {
		title: meta.data.title,
		description: meta.data.description || "",
		date: meta.data.date,
		thumbnailUrl,
		content
	}
}
