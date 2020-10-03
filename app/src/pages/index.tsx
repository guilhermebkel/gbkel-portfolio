import React from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps } from "next"

import Layout, { siteTitle } from "@/components/layout"
import Date from "@/components/date"

import utilStyles from "@/styles/utils.module.css"

import { getAllPosts, PostPreview } from "@/lib/posts"

type HomeProps = {
	posts: PostPreview[]
}

const Home: React.FC<HomeProps> = ({ posts }) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this in{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{posts.map((post) => (
						<li className={utilStyles.listItem} key={post.slug}>
							<Link href={post.url}>
								<span>{post.title}</span>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={post.date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllPosts()

	return {
		props: {
			posts
		}
	}
}
