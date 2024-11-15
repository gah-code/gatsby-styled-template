import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.5;
`

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
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
        <Heading>Welcome to My Gatsby Site</Heading>
        <Paragraph>
          This is a simple static content page using styled-components and a
          light/dark theme toggle.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
