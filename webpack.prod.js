const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/scripts/script.js"
  },
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      cache: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};
