module.exports = {
  presets: [
    ["babel-preset-gatsby"],
    ["@babel/preset-env", { loose: true }],
    ["@babel/preset-react"],
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ],
}
