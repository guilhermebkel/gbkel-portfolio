import { useState } from "react"

import useDidMount from "@/hooks/useDidMount"

type ResponsiveBreakpoints = "sm" | "md" | "lg" | "xl"

type UseResponsiveBreakpointsInput<Result> = {
	breakpoints: {
		[breakpoint in ResponsiveBreakpoints]?: Result
	},
	initialValue: Result
}

type useResponsiveBreakpointsResponse<Result> = {
	currentResult: Result
}

const MAPPED_BREAKPOINT_WIDTH = {
	sm: 576,
	md: 768,
	lg: 1200,
	xl: 1920
}

function useResponsiveBreakpoints<Result>(
	data: UseResponsiveBreakpointsInput<Result>
): useResponsiveBreakpointsResponse<Result> {
	const [currentResult, setCurrentResult] = useState({} as Result)

	const setCurrentBreakpointResult = (target: Window) => {
		let currentResultCache: Result = data.initialValue

		const responsiveOptions = Object.entries(data.breakpoints)
			.map(([breakpoint, result]) => ({
				breakpoint: MAPPED_BREAKPOINT_WIDTH[breakpoint],
				result
			}))

		responsiveOptions
			.sort((optionA, optionB) => optionB.breakpoint - optionA.breakpoint)
			.forEach(option => {
				if (target.innerWidth <= option.breakpoint) {
					currentResultCache = option.result
				}
			})

		setCurrentResult(currentResultCache)
	}

	useDidMount(() => {
		setCurrentBreakpointResult(window)

		window.addEventListener("resize", (event) => {
			setCurrentBreakpointResult(event.target as Window)
		})

		return () => {
			window.removeEventListener("resize", (event) => {
				setCurrentBreakpointResult(event.target as Window)
			})
		}
	})

	return {
		currentResult
	}
}

export default useResponsiveBreakpoints
