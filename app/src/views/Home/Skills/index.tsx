import React from "react"

import {
	Summary,
	Button,
	TagsGlobe
} from "@/components"

import {
	SkillsSectionContainer,
	SkillsSectionContent,
	SkillsGlobeContainer,
	SeeMoreContainer
} from "@/views/Home/Skills/styles"

import { appUrls } from "@/lib/personal"

import useResponsiveBreakpoints from "@/hooks/useResponsiveBreakpoints"

const SKILLS = [
	"Next.js", "React.js", "Typescript", "Node.js", "AWS", "Software Architecture", "Fast Learning",
	"Excellence", "Fast Delivery", "Commitment", "Quality Minded", "Javascript", "Software Patterns",
	"Solution Modelling"
]

const SkillsSection: React.FC = () => {
	const { currentResult } = useResponsiveBreakpoints<{ globeSize: number, globeFontSize: number }>({
		breakpoints: {
			sm: { globeSize: 300, globeFontSize: 10 },
			md: { globeSize: 500, globeFontSize: 17 },
			xl: { globeSize: 700, globeFontSize: 17 }
		},
		initialValue: { globeSize: 700, globeFontSize: 17 }
	})

	return (
		<SkillsSectionContainer>
			<SkillsSectionContent>
				<Summary
					spotlightWidth="170px"
					type="About"
					title="Skills."
					description="A list of skills I have developed by practical and theoretical experiences."
				/>
	
				<SkillsGlobeContainer
					initInvisible
					threshold={0.3}
				>
					<TagsGlobe
						width={currentResult.globeSize}
						height={currentResult.globeSize}
						fontSize={currentResult.globeFontSize}
						tags={SKILLS}
					/>
				</SkillsGlobeContainer>
	
				<SeeMoreContainer>
					<Button href={appUrls.skills}>
						CLICK HERE TO SEE MORE
					</Button>
				</SeeMoreContainer>
			</SkillsSectionContent>
		</SkillsSectionContainer>
	)
}

export default SkillsSection
