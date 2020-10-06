export const getLatestDate = (dates: Date[]): Date => {
	const latestDateInMilliseconds = Math.max(
		...dates.map(date => +new Date(date))
	)

	let latestDate: Date

	dates.forEach(date => {
		const dateInMilliseconds = +new Date(date)

		if (dateInMilliseconds === latestDateInMilliseconds) {
			latestDate = date
		}
	})

	return latestDate
}
