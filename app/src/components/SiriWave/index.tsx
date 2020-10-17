import React from "react"

import {
	Wave
} from "@/components/SiriWave/styles"

import {
	Script
} from "@/components"

import { setupSiriWave } from "@/lib/external"

import useDidMount from "@/hooks/useDidMount"

const SiriWave: React.FC = () => {
	useDidMount(() => {
		window.addEventListener("load", () => {
			setupSiriWave({
				container: document.getElementById("wave"),
				speed: 0.02,
				color: "#FFFFFF",
				frequency: 4,
				autostart: true,
				amplitude: 1
			})
		})
	})

	return (
		<>
			<Wave id="wave" />

			<Script src="/js/siriwave.js" />
		</>
	)
}

export default SiriWave
