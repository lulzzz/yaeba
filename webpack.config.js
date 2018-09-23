const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"},

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: ["node_modules", "src", "types"],
    alias: {
        components: path.resolve(__dirname, 'src/components'),
        domain: path.resolve(__dirname, 'src/domain'),
    }
  },

  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
};