import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures full viewport height */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`

const Content = styled.main`
  flex-grow: 1; /* Ensures the content grows to fill available space */
  max-width: ${({ theme }) => theme.sizes.container || "100%"};
  margin: 0 auto;
  padding: ${({ theme }) => theme.sizes.gutter || "1rem"};
`

const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.sizes.gutter || "2rem"};
  font-size: ${({ theme }) => theme.fontSizes.small || "0.875rem"};
  text-align: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageWrapper>
      <Header siteTitle={data.site.siteMetadata?.title || "Title"} />
      <Content>{children}</Content>
      <Footer>
        © {new Date().getFullYear()} &middot; Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </PageWrapper>
  )
}

export default Layout
