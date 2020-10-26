import styled from "styled-components"

export const TimelineContainer = styled.ul`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	flex-grow: 1;
`

export const TimelineItem = styled.li`
	width: 100%;
	
	display: flex;
	align-items: center;
	justify-content: center;

	list-style: none;
`

export const TimelineContent = styled.div`
	background-color: var(--black-color-1);

	padding: 2rem;

	color:var(--gray-color-15);
	font-size: 2rem;
	height: 10rem;

	display: flex;
	flex: 1;

	max-width: 55rem;
`

export const TimelineOppositeContent = styled.div`
	display: flex;
	flex: 1;

	max-width: 55rem;
`

export const TimelineSeparator = styled.div`
	height: 100%;

	margin: 0 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	flex: 0;
`

export const TimelineDot = styled.div`
	width: 2rem;
	height: 2rem;

	margin: 1rem 0;

	background-color: var(--gray-color-15);

	border-radius: 100%;
`

export const TimelineConnector = styled.div`
	width: 3px;
	height: 100%;

	flex-grow: 1;

	background-color: var(--gray-color-15);
`
