const path = require("path");
const common = require("./webpack.common"); // Bring in common config
const { merge } = require("webpack-merge"); // Used to merge common and prod configs

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js", // contentHash generates a new hash on a build
    path: path.resolve(__dirname, "dist"),
    clean: true, // clears dist of unused files
  },
});
