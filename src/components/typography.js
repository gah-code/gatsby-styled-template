import styled from "styled-components"
import theme from "../styles/theme"
import { responsiveFontSize } from "../utils/responsiveFontSize"

export const H1 = styled.h1`
  ${({ theme }) => responsiveFontSize(theme.fontSizes.heading)}
  color: ${({ theme }) => theme.colors.primary};
`

// export const H1 = styled.h1`
//   ${({ theme }) => {
//     console.log("Theme:", theme)
//     return `
//       font-size: ${theme.fontSizes.heading.xs};
//       color: ${theme.colors.primary};
//     `
//   }}
// `

export const H2 = styled.h2`
  ${({ theme }) => responsiveFontSize(theme.fontSizes.subheading)}
  color: ${({ theme }) => theme.colors.secondary};
`

export const H3 = styled.h3`
  ${({ theme }) => responsiveFontSize(theme.fontSizes.subheading)}
  color: ${({ theme }) => theme.colors.highlight};
`

export const P = styled.p`
  ${({ theme }) => responsiveFontSize(theme.fontSizes.paragraph)}
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`
