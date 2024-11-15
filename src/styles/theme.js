export const lightTheme = {
  colors: {
    text: "#333",
    background: "#ddf3e4",
    primary: "#2A3439",
    secondary: "#6C3082",
    highlight: "#e3b567",
    link: "#006d5b",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
  },
  sizes: {
    container: "800px", // Add the container size
    gutter: "1rem", // Add the gutter size
  },
}

export const darkTheme = {
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
}
