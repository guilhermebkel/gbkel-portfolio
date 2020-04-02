import React, { useState, useEffect } from "react"
import { Container, AnimatedLogo } from "./styles"

const EXPECTED_PAGE_LOADING_DURATION = 10000

const Loading = () => {
	const [loadingDuration, setLoadingDuration] = useState(EXPECTED_PAGE_LOADING_DURATION)
	const [currentLoadingDuration, setCurrentLoadingDuration] = useState(0)
	const [pageLoaded, setPageLoaded] = useState(false)

	const onLoad = () => {
		setPageLoaded(true)
	}

	const trackLoadingTime = () => {
		const loadingTracker = requestAnimationFrame(() => {
			if (pageLoaded) {
				setLoadingDuration(3000)
				cancelAnimationFrame(loadingTracker)
			} else if (currentLoadingDuration >= (EXPECTED_PAGE_LOADING_DURATION / 2)) {
				setLoadingDuration(lastLoadingDuration => lastLoadingDuration + 1500)
			}

			setCurrentLoadingDuration(currentLoading => currentLoading + 1)
		})
	}

	useEffect(() => {
		trackLoadingTime()
		window.addEventListener("load", onLoad)
	})

	return (
		<Container animationDuration={loadingDuration}>
			<AnimatedLogo animationDuration={loadingDuration}>
				<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 546.25 659.89">
					<title>logo</title>
					<path class="cls-1 wqUuZdTE_0" d="M56,281.65,55,382.31s8.55,149.25,148.33,160C264,547,306.71,511,306.71,511V694.31s-6.67,34.89,28,37.44,117.33,0,117.33,0,122.09-6,129-131.44C585.37,521.65,520,487,520,487s36.19-22.66,35.33-94c-.66-55.33-58-97.33-107.33-98.67s-207.33,0-207.33,0-23.34,3.34-23.34,35.34C217.37,349,240,355,240,355h67.33v29.33s-6.07,102.19-100.66,98c-75.34-3.33-86-83.33-86-83.33l-1.34-146.67S120.71,149.65,214,149.65c49.33,0,79.33,36,79.33,36s16.79,19.38,40-.67c14.67-12.67,6-35.33,6-35.33S292.71,88,214,88,53.37,137,56,281.65Z" transform="translate(-39 -77)"></path>
					<path class="cls-2 wqUuZdTE_1" d="M372.65,355V464.33h78.66s40.67-3.75,44-53.87S446.65,355,446.65,355Z" transform="translate(-39 -77)"></path>
					<path class="cls-3 wqUuZdTE_2" d="M372.65,525.67V671h76.66s68-2.67,71.34-72.67-66-72.66-66-72.66Z" transform="translate(-39 -77)"></path>
					<path class="cls-4 wqUuZdTE_3" d="M44,274.67,43,375.33s8.55,149.25,148.33,160C252,540,294.67,504,294.67,504V687.33s-6.67,34.89,28,37.44,117.33,0,117.33,0,122.09-6,129-131.44C573.33,514.67,508,480,508,480s36.19-22.66,35.33-94c-.66-55.33-58-97.33-107.33-98.67s-207.33,0-207.33,0-23.34,3.34-23.34,35.34C205.33,342,228,348,228,348h67.33v29.33s-6.07,102.19-100.66,98c-75.34-3.33-86-83.33-86-83.33l-1.34-146.67S108.67,142.67,202,142.67c49.33,0,79.33,36,79.33,36s16.79,19.38,40-.67c14.67-12.67,6-35.33,6-35.33S280.67,81,202,81,41.33,130,44,274.67Z" transform="translate(-39 -77)"></path>
					<path class="cls-4 wqUuZdTE_4" d="M358,348V457.33h78.67s40.66-3.75,44-53.87S432,348,432,348Z" transform="translate(-39 -77)"></path>
					<path class="cls-4 wqUuZdTE_5" d="M358,518.67V664h76.67s68-2.67,71.33-72.67-66-72.66-66-72.66Z" transform="translate(-39 -77)"></path>
				</svg>
			</AnimatedLogo>
		</Container>
	)
}

export default Loading