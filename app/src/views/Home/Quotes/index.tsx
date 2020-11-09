import React from "react"

import {
	Summary,
	Spotlight
} from "@/components"

import {
	QuoteItem,
	QuoteItemText,
	QuoteItemIcon,
	QuoteItemContainer,
	QuoteItemContent,
	QuotesSectionContainer,
	QuotesSectionContent,
} from "@/views/Home/Quotes/styles"

const QuotesSection: React.FC = () => (
	<QuotesSectionContainer>
		<QuotesSectionContent>
			<Summary
				spotlightWidth="230px"
				type="About"
				title="Quotes."
				description="Some quotes I find to be the base of everything I do and try to walk on the talk on my life."
			/>

			<QuoteItemContainer>
				<QuoteItemContent>
					<QuoteItem>
						<QuoteItemIcon
							src="/icons/quote.svg"
							alt="quote icon"
						/>
						<QuoteItemText>
							Does not matter what your
							doing,
							<Spotlight
								bottom="-0.1rem"
								left="0"
								height="1.7rem"
								width="32rem"
							>
								<b>
									do it with excellence.
								</b>
							</Spotlight>
						</QuoteItemText>
					</QuoteItem>

					<QuoteItem>
						<QuoteItemIcon
							src="/icons/quote.svg"
							alt="quote icon"
						/>
						<QuoteItemText>
							Start learning by the surface and
							<Spotlight
								bottom="-0.1rem"
								left="0"
								height="1.7rem"
								width="52rem"
							>
								<b>
									keep going deep to the abstractions.
								</b>
							</Spotlight>
						</QuoteItemText>
					</QuoteItem>

					<QuoteItem>
						<QuoteItemIcon
							src="/icons/quote.svg"
							alt="quote icon"
						/>
						<QuoteItemText>
							Try not to focus on learning new technologies, but
							<Spotlight
								bottom="-0.1rem"
								left="0"
								height="1.7rem"
								width="46rem"
							>
								<b>
									improving your learning process
								</b>
							</Spotlight>
							for every single new technology you study.
						</QuoteItemText>
					</QuoteItem>
				</QuoteItemContent>
			</QuoteItemContainer>
		</QuotesSectionContent>
	</QuotesSectionContainer>
)

export default QuotesSection
