const path = require('path');

module.exports = {
  entry: {
    a: path.join(__dirname, 'entry.js'),
    b: path.join(__dirname, 'entry0.js'),
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
        loader: "style!css"
      },
    ]
  },
};
