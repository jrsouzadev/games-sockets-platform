const path = require("path");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
};

/**
import path from "path";

export default {
  mode: "production",
  target: "node",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve("./dist"),
    clean: true,
  },
};
*/
