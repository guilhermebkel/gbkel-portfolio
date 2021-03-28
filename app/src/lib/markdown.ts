import { Renderer } from "marked"
import { getSlugFromUrl } from "@/lib/url"

export class CustomRenderer extends Renderer {
	image (href: string | null, title: string | null, alt: string): string {
		const imageSlug = getSlugFromUrl(href)

		const formattedTitle = title || ""
		const formattedAlt = alt || ""

		return (`
			<figure>
				<a
					data-fancybox="${imageSlug}"
					data-hash="${imageSlug}"
					href="${href}"
					data-caption="${formattedTitle}"
				>
						<img src="${href}" alt="${formattedAlt}">
				</a>

				<figcaption>${formattedTitle}</figcaption>
			</figure>
		`)
	}
}