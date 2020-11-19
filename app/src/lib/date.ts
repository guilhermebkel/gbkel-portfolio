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

export const getShortDate = (date: Date): string => {
	if (!date) {
		return ""
	}

	const parsedDate = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}).format(date)

	const [month, day, year] = parsedDate
		.toLowerCase()
		.replace(/,/g, "")
		.split(" ")

	const formattedDate = `${day} ${month} ${year}`

	return formattedDate
}