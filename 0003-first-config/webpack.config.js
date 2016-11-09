const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'entry.js'),
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
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
