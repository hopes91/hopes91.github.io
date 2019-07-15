const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

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
