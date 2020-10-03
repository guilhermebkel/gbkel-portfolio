import React from "react"
import Head from "next/head"
import styles from "@/components/layout.module.css"
import utilStyles from "@/styles/utils.module.css"
import Link from "next/link"

const name = "[Your Name]"
export const siteTitle = "Next.js Sample Website"

type LayoutProps = {
	home?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src="/images/profile.jpg"
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<span>
								<img
									src="/images/profile.jpg"
									className={`${styles.headerImage} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</span>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<span className={utilStyles.colorInherit}>{name}</span>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<span>← Back to home</span>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Layout
