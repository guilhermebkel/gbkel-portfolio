import styled from "styled-components"

export const TimelineContainer = styled.ul`
	position: relative;

	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	flex-grow: 1;
`

export const TimelineItem = styled.li`
	position: relative;

	width: 100%;
	min-height: 10rem;
	
	display: flex;
	align-items: center;
	justify-content: center;

	list-style: none;

	margin: 2rem 0;
`

export const TimelineContent = styled.div`
	padding: 2rem;

	display: flex;
	flex: 1;
	order: 0;

	max-width: 50rem;
`

export const TimelineOppositeContent = styled(TimelineContent)`
	padding: 0;
`

export const TimelineSeparator = styled.div`
	margin: 0 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	order: 1;

	flex: 0;
`

export const TimelineDot = styled.div`
	position: relative;

	width: 2rem;
	height: 2rem;

	margin: 1rem 0;

	background-color: var(--gray-color-15);

	border-radius: 100%;

	box-shadow: 0 0 0 1rem var(--gray-color-1);

	z-index: 3;
`

export const TimelineConnectorContainer = styled.li`
	position: absolute;
	
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	list-style: none;
`

export const TimelineConnector = styled.div`
	width: 3px;
	height: 100%;

	background-color: var(--gray-color-15);
`
