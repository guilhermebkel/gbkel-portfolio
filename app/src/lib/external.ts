type SetupSiriWave = {
	Options: {
		container: Element
		speed: number
		color: string
		frequency: number
		autostart: boolean
		amplitude: number
	}
}

export const setupSiriWave = (options: SetupSiriWave["Options"]): void => {
	const Siriwave = globalThis["SiriWave"]

	if (Siriwave) {
		new Siriwave(options)
	}
}

type SetupTagCanvas = {
	Options: {
		elementId: string
		dragControl: boolean
		noMouse: boolean
		textColour: string
		textHeight: number
		initial: Array<number>
	}
}

export const setupTagCanvas = (options: SetupTagCanvas["Options"]): void => {
	const { elementId, ...otherOptions } = options

	const TagCanvas = globalThis["TagCanvas"]

	if (TagCanvas) {
		TagCanvas.Start(elementId, "", otherOptions)
	}
}
