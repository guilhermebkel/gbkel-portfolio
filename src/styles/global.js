import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    font-family: "Lato", sans-serif;
    background: ${props => props.theme.background};
    flex: 4;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  label {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
  }

  input {
    font-size: 16px;
    line-height: 22px;
    color: #444444;
  }
`

export default GlobalStyle
