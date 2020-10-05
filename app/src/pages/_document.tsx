import React from "react"
import NextDocument, { DocumentInitialProps, DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

class CustomDocument extends NextDocument {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () => {
				return originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
				})
			}

			const initialProps = await NextDocument.getInitialProps(ctx)

			const props = {
				...(initialProps || {}),
				styles: (
					<>
						{initialProps?.styles}
						{sheet.getStyleElement()}
					</>
				)
			} as DocumentInitialProps

			return props
		} finally {
			sheet.seal()
		}
	}
}

export default CustomDocument
