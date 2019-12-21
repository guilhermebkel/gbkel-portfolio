import React from "react"
import { ThemeProvider } from "styled-components"

import light from "../src/styles/themes/light"

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={light}>
      {element}
    </ThemeProvider>
  )
}

export {
  wrapRootElement
}
