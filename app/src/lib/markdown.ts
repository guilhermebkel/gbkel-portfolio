import { Renderer } from "marked"

export class CustomRenderer extends Renderer {
	image (href: string | null, title: string | null, alt: string): string {
		return (`
			<a
				data-hash="true"
				href="${href}"
				data-caption="${title}"
			>
				<figure>
					<img src="${href}" alt="${alt}">
					<figcaption>${title}</figcaption>
				</figure>
			</a>
		`)
	}
}