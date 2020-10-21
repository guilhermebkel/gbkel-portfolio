import { handleError } from "@/lib/error"

type SubdomainAlias = {
	from: string
	to: string
}

export const getSubdomainAliases = async (): Promise<SubdomainAlias[]> => {
	const subdomainAliases: SubdomainAlias[] = []

	const subdomainAliasesFileUrl = "https://raw.githubusercontent.com/guilhermebkel/gbkel-redirects/main/_redirects"

	try {
		let subdomainAliasesText = await fetch(subdomainAliasesFileUrl)
			.then(result => result.text())
			.catch(error => handleError(error))

		subdomainAliasesText = subdomainAliasesText || ""

		const lines = subdomainAliasesText.split("\n") as string[]

		const tempSubdomainAliases = lines
			.filter(line => line.includes("http"))
			.map(line => {
				const [from, to] = line.split(" ")

				return {
					from,
					to
				}
			})

		tempSubdomainAliases.forEach(subdomainAlias => {
			const isFromInsecure = subdomainAlias.from.includes("http://")

			if (isFromInsecure) {
				const fromHost = subdomainAlias.from.split("http://").pop()

				const secureFrom = `https://${fromHost}`

				const isThereAnySecureFrom = tempSubdomainAliases
					.some(subdomainAlias => subdomainAlias.from.includes(secureFrom))

				if (!isThereAnySecureFrom) {
					subdomainAliases.push(subdomainAlias)
				}
			} else {
				subdomainAliases.push(subdomainAlias)
			}
		})
	} catch (error) {
		handleError(error)
	}

	return subdomainAliases
}
