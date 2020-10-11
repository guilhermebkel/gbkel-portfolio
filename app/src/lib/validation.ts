export const isValidNumber = (value: number): boolean => {
	const isValid = !isNaN(+value)

	return isValid
}
