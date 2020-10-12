// eslint-disable-next-line
export function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void {
	globalThis?.addEventListener?.(type, listener, options)
}

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

	new Siriwave(options)
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

	TagCanvas.Start(elementId, "", otherOptions)
}
