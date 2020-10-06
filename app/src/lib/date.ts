export function getLatestDate<DateType extends string>(dates: DateType[]): DateType {
	const latestDateInMilliseconds = Math.max(
		...dates.map(date => +new Date(date))
	)

	let latestDate: DateType

	dates.forEach(date => {
		const dateInMilliseconds = +new Date(date)

		if (dateInMilliseconds === latestDateInMilliseconds) {
			latestDate = date
		}
	})

	return latestDate
}
