const path = require('path');

// One hash for the bundle
module.exports = {
  entry: {
    example: path.join(__dirname, 'example.js'),
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
};
