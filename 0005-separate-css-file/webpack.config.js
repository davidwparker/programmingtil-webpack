const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    a: path.join(__dirname, 'a.js'),
    b: path.join(__dirname, 'b.js'),
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].bundle.css")
  ]
};
