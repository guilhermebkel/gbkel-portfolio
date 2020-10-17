const GLOBAL_VARIABLE_NAME = "callbackPool"

type Callback = (() => void) | (() => Promise<void>)

type CallbackPool = Array<Callback>

type UseCallbackPoolResponse = {
	addToCallbackPool: (callback: Callback) => void
}

const useCallbackPool = (): UseCallbackPoolResponse => {
	const requestCallback = (callback: Callback) => {
		globalThis?.requestIdleCallback?.(callback)
	}

	const setCallbackPool = (value: CallbackPool): void => {
		globalThis[GLOBAL_VARIABLE_NAME] = value
	}

	const retrieveCallbackPool = (): CallbackPool => {
		const callbackPool = globalThis[GLOBAL_VARIABLE_NAME]
	
		if (!callbackPool) {
			setCallbackPool([])
	
			return retrieveCallbackPool()
		}
	
		return callbackPool
	}

	const removeFromCallbackPool = (indexToRemove: string) => {
		let globalPool = retrieveCallbackPool()

		delete globalPool[indexToRemove]

		globalPool = globalPool.filter(callback => callback)

		setCallbackPool(globalPool)
	}

	const addToCallbackPool = (callback: Callback) => {
		const globalPool = retrieveCallbackPool()

		globalPool.push(callback)

		setCallbackPool(globalPool)
	}

	const runQueue = async () => {
		const globalPool = retrieveCallbackPool()

		for (const callbackIndex in globalPool) {
			const callback = globalPool[callbackIndex]

			const timeoutBeforeCallback = +callbackIndex * 100

			await new Promise(resolve => {
				setTimeout(async () => {
					await callback?.()

					resolve()
				}, timeoutBeforeCallback)
			})

			removeFromCallbackPool(callbackIndex)
		}

		requestCallback(runQueue)
	}

	requestCallback(runQueue)

	return {
		addToCallbackPool
	}
}

export default useCallbackPool
