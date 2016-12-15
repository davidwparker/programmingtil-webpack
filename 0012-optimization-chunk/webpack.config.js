const path = require('path');

module.exports = {
  entry: {
    example: path.join(__dirname, 'example.js'),
    example1: path.join(__dirname, 'example1.js'),
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js",
  },
};
