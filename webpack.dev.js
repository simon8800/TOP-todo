const path = require("path");
const common = require("./webpack.common"); // Bring in common config file
const { merge } = require("webpack-merge"); // Use to merge common and dev configs

module.exports = merge(common, {
  mode: "development", // development mode doesn't minify bundled code
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
  },
});
