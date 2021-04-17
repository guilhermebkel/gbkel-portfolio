import { Renderer } from "marked"

import { getSlugFromUrl } from "@/lib/url"
import { buildCDNUrl } from "@/lib/cdn"

export class CustomRenderer extends Renderer {
	image (href: string | null, title: string | null, alt: string): string {
		const imageSlug = getSlugFromUrl(href)

		const formattedTitle = title || ""
		const formattedAlt = alt || ""
		const cdnUrl = buildCDNUrl(href)

		return (`
			<figure>
				<a
					data-fancybox="${imageSlug}"
					data-hash="${imageSlug}"
					href="${href}"
					data-caption="${formattedTitle}"
				>
						<img src="${cdnUrl}" alt="${formattedAlt}" loading="lazy" />
				</a>

				<figcaption>${formattedTitle}</figcaption>
			</figure>
		`)
	}
}
