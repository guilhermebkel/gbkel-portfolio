import React from "react"
import { ThemeProvider } from "styled-components"

import light from "../src/styles/themes/light"

import GlobalStyles from "../src/styles/global"

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}

export {
  wrapRootElement
}
