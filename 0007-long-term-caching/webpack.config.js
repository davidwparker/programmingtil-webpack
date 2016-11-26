const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// One hash for the bundle
module.exports = {
  entry: {
    a: path.join(__dirname, 'a.js'),
  },
  output: {
    path: __dirname,
    filename: "[hash].bundle.js",
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
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      title: 'long term caching',
      filename: 'index.bundle.html',
    }),
  ]
};
