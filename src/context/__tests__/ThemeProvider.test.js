import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"
import { ThemeProvider, ThemeContext } from "../ThemeContext"

// Clear localStorage before each test
beforeEach(() => {
  localStorage.clear()
})

// Cleanup DOM after each test
afterEach(cleanup)

test("toggles theme between light and dark", () => {
  const { getByText } = render(
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme}>Current Theme: {theme}</button>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )

  const button = getByText(/Current Theme:/i)

  // Initial state should be light
  expect(button).toHaveTextContent("Current Theme: light")

  // Toggle to dark mode
  fireEvent.click(button)
  expect(button).toHaveTextContent("Current Theme: dark")

  // Toggle back to light mode
  fireEvent.click(button)
  expect(button).toHaveTextContent("Current Theme: light")
})

test("theme persists across page reloads", () => {
  const { getByText, unmount } = render(
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme}>Current Theme: {theme}</button>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )

  const button = getByText(/Current Theme:/i)

  // Initial state should be light
  expect(button).toHaveTextContent("Current Theme: light")

  // Toggle to dark mode
  fireEvent.click(button)
  expect(button).toHaveTextContent("Current Theme: dark")

  // Unmount to simulate a page reload
  unmount()

  // Render again to simulate remount after reload
  const { getByText: getByTextAfterReload } = render(
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => <button>Current Theme: {theme}</button>}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )

  // Verify that the theme persisted
  const updatedButton = getByTextAfterReload(/Current Theme:/i)
  expect(updatedButton).toHaveTextContent("Current Theme: dark")
})
