const path = require('path');

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'script.js'
  }
};
