import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { theme, lightTheme } from "../../styles/theme" // Update the path to your theme
import { H1, H2, H3, P } from "../../components/typography" // Update the path to your Typography components
import "jest-styled-components"

describe("Typography Colors", () => {
  const renderWithTheme = Component =>
    render(
      <ThemeProvider theme={lightTheme}>
        <Component>Test Text</Component>
      </ThemeProvider>
    )

  test("H1 renders correct color", () => {
    const { container } = renderWithTheme(H1)
    const h1 = container.firstChild

    expect(h1).toHaveStyleRule("color", lightTheme.colors.primary)
  })

  test("H2 renders correct color", () => {
    const { container } = renderWithTheme(H2)
    const h2 = container.firstChild

    expect(h2).toHaveStyleRule("color", lightTheme.colors.secondary)
  })

  test("H3 renders correct color", () => {
    const { container } = renderWithTheme(H3)
    const h3 = container.firstChild

    expect(h3).toHaveStyleRule("color", lightTheme.colors.highlight)
  })

  test("P renders correct color", () => {
    const { container } = renderWithTheme(P)
    const p = container.firstChild

    expect(p).toHaveStyleRule("color", lightTheme.colors.text)
  })
})
