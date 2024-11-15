import React from "react"
import ReactDOM from "react-dom"

import { ThemeProvider } from "./src/context/ThemeContext"

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react")
  axe(React, ReactDOM, 1000)
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
