import { Renderer } from "marked"
import { getSlugFromUrl } from "@/lib/url"

export class CustomRenderer extends Renderer {
	image (href: string | null, title: string | null, alt: string): string {
		const imageSlug = getSlugFromUrl(href)

		return (`
			<figure>
				<a
					data-fancybox="${imageSlug}"
					data-hash="${imageSlug}"
					href="${href}"
					data-caption="${title}"
				>
						<img src="${href}" alt="${alt}">
				</a>

				<figcaption>${title}</figcaption>
			</figure>
		`)
	}
}