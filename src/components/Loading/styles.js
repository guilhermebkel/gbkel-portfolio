import styled from "styled-components"

export const Container = styled.div`
  background-color: ${props => props.theme.secondary};
  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: 200;

  justify-content: center;

  display: flex;

  animation: fadeOut 2s forwards;
  animation-delay: ${({ animationDuration }) => `${(animationDuration / 1000).toFixed(2)}s`};

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      z-index: -999;
    }
  }
`

export const AnimatedLogo = styled.object`
  width: 85px;
  height: auto;

  margin: auto;

  .cls-1,
  .cls-2,
  .cls-3,
  .cls-4 {
    fill: none;
    stroke-miterlimit: 10;
    stroke-width: 10px;
  }
  .cls-1 {
    stroke: #777;
  }
  .cls-2 {
    stroke: #777;
  }
  .cls-3 {
    stroke: #777;
  }
  .cls-4 {
    stroke: #00e1ff;
  }
  .wqUuZdTE_0 {
    stroke-dasharray: 2984 2986;
    stroke-dashoffset: 2985;
    animation: wqUuZdTE_draw ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out 0ms forwards;
  }
  .wqUuZdTE_1 {
    stroke-dasharray: 420 422;
    stroke-dashoffset: 421;
    animation: wqUuZdTE_draw ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out 60ms forwards;
  }
  .wqUuZdTE_2 {
    stroke-dasharray: 527 529;
    stroke-dashoffset: 528;
    animation: wqUuZdTE_draw ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out 120ms forwards;
  }
  .wqUuZdTE_3 {
    stroke-dasharray: 2984 2986;
    stroke-dashoffset: 2985;
    animation: wqUuZdTE_draw ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out 180ms forwards;
  }
  .wqUuZdTE_4 {
    stroke-dasharray: 420 422;
    stroke-dashoffset: 421;
    animation: wqUuZdTE_draw ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out 240ms forwards;
  }
  .wqUuZdTE_5 {
    stroke-dasharray: 527 529;
    stroke-dashoffset: 528;
    animation: wqUuZdTE_draw ${({ animationDuration }) => `${animationDuration}ms`} ease-in-out 300ms forwards;
  }
  @keyframes wqUuZdTE_draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes wqUuZdTE_fade {
    0% {
      stroke-opacity: 1;
    }
    95.65217391304348% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0;
    }
  }
`
