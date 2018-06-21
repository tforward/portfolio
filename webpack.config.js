const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/scripts/script.js"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dev"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dev")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
