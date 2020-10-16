import React from "react"

import {
	Globe,
	TagList,
	TagListItem,
	TagListItemLink
} from "@/components/TagsGlobe/styles"

import { setupTagCanvas } from "@/lib/external"

import useDidMount from "@/hooks/useDidMount"

type TagsGlobeProps = {
	width: number
	height: number
	tags: string[]
}

const TagsGlobe: React.FC<TagsGlobeProps> = (props) => {
	const { width, height, tags } = props

	useDidMount(() => {
		window.addEventListener("load", () => {
			setupTagCanvas({
				elementId: "tags-globe",
				dragControl: true,
				noMouse: true,
				textColour: "#FFFFFF",
				textHeight: 16,
				initial: [0.2, -0.2]
			})
		})
	})

	return (
		<>
			<Globe id="tags-globe" width={width} height={height}>
				<TagList>
					{tags.map(tag => (
						<TagListItem key={tag}>
							<TagListItemLink href={`#${tag}`}>
								{tag}
							</TagListItemLink>
						</TagListItem>
					))}
				</TagList>
			</Globe>

			<script src="/js/tagcanvas.min.js"></script>
		</>
	)
}

export default TagsGlobe
