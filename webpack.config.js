const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'script.js'
  }
};
