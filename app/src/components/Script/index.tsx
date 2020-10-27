import React from "react"

import { buildCDNUrl } from "@/lib/cdn"

type ScriptProps = {
	src: string
}

const Script: React.FC<ScriptProps> = (props) => {
	const { src } = props

	const scriptSrc = buildCDNUrl(src)

	return (
		<script src={scriptSrc}></script>
	)
}

export default Script
