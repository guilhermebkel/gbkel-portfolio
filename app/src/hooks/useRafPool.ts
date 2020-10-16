type Pool = Array<() => void>

const retrievePool = (): Pool => {
	const pool = globalThis["rafPool"]

	if (!pool) {
		globalThis["rafPool"] = []

		return retrievePool()
	}

	return pool
}

type UseRafPoolResponse = {
	addToRafPool: (fn: () => void) => void
}

const useRafPool = (): UseRafPoolResponse => {

	const removeFromRafPool = (indexToRemove: string) => {
		const globalPool = retrievePool()

		delete globalPool[indexToRemove]
	}

	const addToRafPool = (fn: () => void) => {
		let globalPool = retrievePool()

		globalPool.push(fn)

		globalPool = globalPool.filter(callback => callback)
		console.log(globalPool)
	}

	globalThis?.requestAnimationFrame?.(async () => {
		const globalPool = retrievePool()

		for (const callbackIndex in globalPool) {
			const callback = globalPool[callbackIndex]

			const timeoutBeforeCallback = +callbackIndex * 100

			await new Promise(resolve => {
				setTimeout(() => {
					callback?.()

					resolve()
				}, timeoutBeforeCallback)
			})

			removeFromRafPool(callbackIndex)
		}
	})

	return {
		addToRafPool
	}
}

export default useRafPool
