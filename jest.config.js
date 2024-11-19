module.exports = {
  testEnvironment: "jest-environment-jsdom", // Explicitly specify jsdom
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Add jest-dom for better assertions
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Ensure Babel transpiles your tests
  },
}
