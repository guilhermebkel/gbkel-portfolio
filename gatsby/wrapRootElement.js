import React from "react"
import { ThemeProvider } from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faClock, faLongArrowAltLeft, faLongArrowAltRight, faCode } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "antd/dist/antd.css"

// import light from "../src/styles/themes/light"
import dark from "../src/styles/themes/dark"
import GlobalStyles from "../src/styles/global"

library.add(faBars, faClock, fab, faLongArrowAltLeft, faLongArrowAltRight, faCode)

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
