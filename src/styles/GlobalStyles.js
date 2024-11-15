import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    cursor: pointer;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
  /* Additional reset or base styles */
`
