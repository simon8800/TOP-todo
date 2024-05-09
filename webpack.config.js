const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // development mode doesn't minify bundled code
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js", // contentHash generates a new hash on a build
    path: path.resolve(__dirname, "dist"),
    clean: true, // clears dist of unused files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
