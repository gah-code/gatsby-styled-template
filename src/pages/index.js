import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import Layout from "../components/layout"
import ContentWrapper from "../styles/ContentWrapper"
import { H1, H2, H3, P } from "../components/typography"
import Seo from "../components/seo"

// Utility function for responsive font sizes
// const responsiveFontSize = sizes => `
//   font-size: ${sizes.xs};

//   @media (min-width: 480px) {
//     font-size: ${sizes.sm};
//   }

//   @media (min-width: 768px) {
//     font-size: ${sizes.md};
//   }

//   @media (min-width: 992px) {
//     font-size: ${sizes.lg};
//   }
// `

const Container = styled(ContentWrapper)`
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]};
`

// const Heading = styled.h1`
//   color: ${({ theme }) => theme.colors.primary};

//   ${({ theme }) => responsiveFontSize(theme.fontSizes.heading)}
// `

const Heading = styled(H1)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`

const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[4]};

  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.text};
  }
`

const IndexPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Layout>
      <Container>
        <ToggleButton onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </ToggleButton>
        <Heading>Responsive Heading 1</Heading>
        <H2>Responsive Subheading 2</H2>
        <H3>Responsive Subheading 3</H3>
        <P>
          This is a paragraph with responsive font sizes. Resize the window to
          see the effect.
        </P>

        {/* <Heading>Welcome to My Gatsby Site</Heading>
        <SubHeading>Responsive Subheading Example</SubHeading>
        <Paragraph>
          This is a simple static content page using styled-components and a
          light/dark theme toggle. Resize the window to see responsive font
          sizes in action.
        </Paragraph> */}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
