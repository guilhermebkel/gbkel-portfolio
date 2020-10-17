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
		let callbackPool = retrieveCallbackPool()

		delete callbackPool[indexToRemove]

		callbackPool = callbackPool.filter(callback => callback)

		setCallbackPool(callbackPool)
	}

	const addToCallbackPool = (callback: Callback) => {
		const callbackPool = retrieveCallbackPool()

		callbackPool.push(callback)

		setCallbackPool(callbackPool)
	}

	const runQueue = async () => {
		const callbackPool = retrieveCallbackPool()

		for (const callbackIndex in callbackPool) {
			const callback = callbackPool[callbackIndex]

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
