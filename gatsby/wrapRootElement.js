import React from "react"
import { ThemeProvider } from "styled-components"

// import light from "../src/styles/themes/light"
import dark from "../src/styles/themes/dark"

import GlobalStyles from "../src/styles/global"

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}

export {
  wrapRootElement
}
