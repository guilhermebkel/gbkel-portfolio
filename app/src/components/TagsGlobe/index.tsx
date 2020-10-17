import React, { useEffect } from "react"

import {
	Globe,
	TagList,
	TagListItem,
	TagListItemLink
} from "@/components/TagsGlobe/styles"

import { setupTagCanvas } from "@/lib/external"

type TagsGlobeProps = {
	width: number
	height: number
	fontSize: number
	tags: string[]
}

const TagsGlobe: React.FC<TagsGlobeProps> = (props) => {
	const { width, height, fontSize, tags } = props

	const options = {
		elementId: "tags-globe",
		dragControl: true,
		noMouse: true,
		textColour: "#FFFFFF",
		textHeight: fontSize,
		initial: [0.2, -0.2]
	}

	useEffect(() => {
		setupTagCanvas(options)
	}, [fontSize, width, height])

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
