export const lightTheme = {
  pageWidth: "62.5rem",

  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
  },

  fontSizes: {
    base: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "20px",
    },
    heading: {
      xs: "24px",
      sm: "28px",
      md: "32px",
      lg: "36px",
    },
    subheading: {
      xs: "20px",
      sm: "22px",
      md: "24px",
      lg: "26px",
    },
    paragraph: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "20px",
    },
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  sizes: {
    container: "800px", // Add the container size
    gutter: "1rem", // Add the gutter size
  },
  colors: {
    text: "#333",
    background: "#ddf3e4",
    primary: "#2A3439",
    secondary: "#6C3082",
    highlight: "#e3b567",
    link: "#006d5b",
  },
  space: [
    0, // index 0 for no space
    "4px", // index 1
    "8px", // index 2
    "16px", // index 3
    "32px", // index 4
    "64px", // index 5
  ],
}

export const darkTheme = {
  ...lightTheme,

  colors: {
    text: "#f9f4e3",
    background: "#263147",
    primary: "#cc7",
    secondary: "#9b4aac",
    highlight: "#ffda79",
    link: "#76c7c0",
  },
  fonts: lightTheme.fonts,
  fontSizes: lightTheme.fontSizes,
  sizes: lightTheme.sizes, // Ensure darkTheme also inherits sizes
  space: lightTheme.space, // Ensure darkTheme inherits space
}

export const media = breakpoints => {
  return Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = styles => `
      @media (min-width: ${breakpoints[label]}) {
        ${styles}
      }
    `
    return acc
  }, {})
}

// Add the utility to the theme
lightTheme.media = media(lightTheme.breakpoints)
darkTheme.media = media(lightTheme.breakpoints)
