export const isValidNumber = (value: number): boolean => {
	const isValid = !isNaN(+value)

	return isValid
}

export const hasValidPictureExtension = (value: string): boolean => {
	const validPictureExtensions = [".jpg", ".png", ".webp", ".jpeg"]

	const isValid = validPictureExtensions.some(extension => value.includes(extension))

	return isValid
}