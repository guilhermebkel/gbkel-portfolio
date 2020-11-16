type ChunkFn<U, T> = (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U

export function chunk<ReturnItem, Item>(perChunk: number): ChunkFn<ReturnItem, Item> {
	return (resultArray: ReturnItem, item: Item, index: number): ReturnItem => { 
		const chunkIndex = Math.floor(index / perChunk)
	
		if(!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []
		}
	
		resultArray[chunkIndex].push(item)
	
		return resultArray as ReturnItem
	}
}

type OrderType = "ASC" | "DESC"
type OrderBy<Item> = (a: Item, b: Item) => number

export function orderBy<Item>(param: keyof Item, order: OrderType): OrderBy<Item> {
	return (a: Item, b: Item): number => {
		// eslint-disable-next-line
		const bParam = b[param] as any
		// eslint-disable-next-line
		const aParam = a[param] as any

		if (order === "ASC") {
			return bParam - aParam
		} else {
			return aParam - bParam
		}
	}
}

export const isLastItem = (totalItems: number, itemIndex: number): boolean => {
	return totalItems - 1 === itemIndex
}
