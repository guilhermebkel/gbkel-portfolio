import React from "react"
import PropTypes from "prop-types"

import { Container, Info, LineHolder, LightningBall } from "./styles"

const WiredInfo = (props) => {
	const { info, position } = props

	return (
		<Container position={position}>
			{
				position === "bottom"
					? (<>
						<Info>{info}</Info>
						<LightningBall position={position} />
						<LineHolder position={position} />
					</>)
					: position === "top"
						? (<>
							<LineHolder position={position} />
							<LightningBall position={position} />
							<Info>{info}</Info>	
						</>)
						: null
			}
		</Container>
	)
}

WiredInfo.propTypes = {
	position: PropTypes.oneOf(["bottom", "top"]).isRequired,
	info: PropTypes.string.isRequired
}

export default WiredInfo