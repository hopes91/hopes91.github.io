const path = require('path');

module.exports = {
  mode: "development",
  entry: './public/script.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
