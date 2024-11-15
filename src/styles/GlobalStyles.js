import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`
