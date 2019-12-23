import styled from "styled-components"

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;


	.ant-carousel-vertical .slick-dots-right {
		right: 55px;
	}

	.ant-carousel .slick-vertical .slick-slide {
		border: 0;
	}

	.slick-active {
		animation: pulse 2s infinite;

		@keyframes pulse {
			0% {
				box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
			}

			70% {
				box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
			}

			100% {
				box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
			}
		}
	}
`
