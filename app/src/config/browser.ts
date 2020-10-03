import chrome from "chrome-aws-lambda"

const chromeExecPaths = {
	win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
	linux: "/usr/bin/google-chrome",
	darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
}

const exePath = chromeExecPaths[process.platform]

import { environmentConfig } from "@/config/environment"

interface Options {
	args: string[]
	executablePath: string
	headless: boolean
}

export const getChromeOptions = async (): Promise<Options> => {
	let options: Options

	if (environmentConfig.isDev) {
		options = {
			args: [],
			executablePath: exePath,
			headless: true
		}
	} else {
		options = {
			args: chrome.args,
			executablePath: await chrome.executablePath,
			headless: chrome.headless
		}
	}

	return options
}
