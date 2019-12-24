import React from "react"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"

const Skills = () => {
	return (
		<Screen color="secondary">
			<WiredInfo 
				info="skills"
				position="top"
			/>
			<WiredInfo 
				info=""
				position="bottom"
			/>
		</Screen>
	)
}

export default Skills