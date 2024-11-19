import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  border: solid 5px #555;
  margin: 0 auto;
  padding: 0 2.5rem;
  /* Apply different borders based on breakpoints */
  ${({ theme }) => theme.media.xs`
    border: 5px solid red;
  `}
  ${({ theme }) => theme.media.sm`
    border: 5px solid blue;
  `}
  ${({ theme }) => theme.media.md`
    border: 5px solid green;
  `}
  ${({ theme }) => theme.media.lg`
    border: 5px solid purple;
  `}
`
export default ContentWrapper
