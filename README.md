# **Gatsby Starter Template with Light/Dark Theme, Contentful, and Testing**

This template demonstrates a modern, fully-functional **theming system** built with **Gatsby**, **styled-components**, and other essential tools. The application offers a smooth and responsive user experience, with a focus on **accessibility**, **scalability**, and **developer-friendly practices**. It also integrates **Contentful** as the CMS and includes a robust testing setup to save time on project startup.

---

## **Key Features**

- **Light/Dark Theme Toggle:**
  - Fully implemented using `styled-components` and React Context API.
  - Themes persist across page reloads via `localStorage`.
  - Dynamically styled for consistent user experience.

- **Contentful CMS Integration:**
  - Pre-configured to fetch data from Contentful spaces.
  - Easily adaptable to your Contentful models.

- **Comprehensive Testing:**
  - **Unit Testing:** Jest with `@testing-library/react` for isolated component testing.
  - **End-to-End Testing:** Cypress for simulating real user interactions.
  - **Accessibility Testing:** Lighthouse and Axe for automated accessibility checks.

- **Accessibility-First Design:**
  - High-contrast themes for improved readability.
  - Fully responsive and WCAG-compliant.

- **Developer-Friendly:**
  - Modular codebase for scalability.
  - Pre-configured with essential plugins like `gatsby-plugin-image` and `gatsby-plugin-styled-components`.

---

## **Tech Stack**

- **Frontend Framework:**
  - Gatsby (React-based static site generator)

- **Styling:**
  - `styled-components` for dynamic theming and CSS-in-JS support.

- **Content Management:**
  - Contentful (GraphQL-based CMS integration)

- **Testing Tools:**
  - Jest and React Testing Library for unit testing.
  - Cypress for end-to-end testing.
  - Axe and Lighthouse for accessibility testing.

---

### Typography Tests and Updates

## Overview

This document outlines the testing process for ensuring consistent colors across typography components (`H1`, `H2`, `H3`, and `P`) in a React project styled with `styled-components`. The typography components use a shared `ThemeProvider` to dynamically apply styles from the `lightTheme`.

---

## Typography Updates

### Typography Components

The typography components (`H1`, `H2`, `H3`, and `P`) are styled to use dynamic colors and font sizes defined in the `theme`. Each component's styles are consistent with the `lightTheme` configuration:

```javascript
export const lightTheme = {
  colors: {
    primary: "#2A3439",
    secondary: "#6C3082",
    highlight: "#e3b567",
    text: "#333",
  },
  fontSizes: {
    heading: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
    subheading: { xs: "20px", sm: "22px", md: "24px", lg: "26px" },
    paragraph: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
  },
};

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd <repository-name>
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Add Contentful Credentials**

Set up your Contentful credentials in a `.env` file:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### **4. Run the Development Server**

```bash
gatsby develop
```

### **5. View the App**

Visit `http://localhost:8000` to view the app in your browser.

---

## **Testing**

### **Unit Testing with Jest**

Run all unit tests:

```bash
npm test
```

### **End-to-End Testing with Cypress**

Run the Cypress test runner:

```bash
npm run cypress:open
```

### **Accessibility Testing**

Use Lighthouse (in Chrome DevTools) or Axe (via Jest integration) for automated checks.

---

## **Customization**

### **Update Contentful Integration**

Modify the GraphQL queries in `src/pages` or components to suit your Contentful models.

### **Add More Themes**

Expand the `src/styles/theme.js` file to include additional themes or modify existing ones.

---

## **Contributing**

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---
