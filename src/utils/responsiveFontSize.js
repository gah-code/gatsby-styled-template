import styled from "styled-components"

// Utility for responsive font sizes
export const responsiveFontSize = sizes => `
  font-size: ${sizes.xs};

  @media (min-width: 480px) {
    font-size: ${sizes.sm};
  }

  @media (min-width: 768px) {
    font-size: ${sizes.md};
  }

  @media (min-width: 992px) {
    font-size: ${sizes.lg};
  }
`
