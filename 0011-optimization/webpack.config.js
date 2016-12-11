const path = require('path');

module.exports = {
  entry: {
    example: path.join(__dirname, 'example.js'),
    page1: path.join(__dirname, 'page1.js'),
    page2: path.join(__dirname, 'page2.js'),
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js",
  },
};
