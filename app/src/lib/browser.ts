import puppeteer, { Page } from "puppeteer-core"

import { getChromeOptions } from "@/config/browser"

let _page: Page | null

const getPage = async (): Promise<Page> => {
	if (_page) {
		return _page
	}

	const chromeOptions = await getChromeOptions()
	const browser = await puppeteer.launch(chromeOptions)

	_page = await browser.newPage()

	return _page
}

export const getScreenshot = async (html: string): Promise<Buffer> => {
	const page = await getPage()

	await page.setViewport({ width: 1200, height: 630 })

	await page.setContent(html)

	const screenshot = await page.screenshot({ type: "png" })

	return screenshot
}
