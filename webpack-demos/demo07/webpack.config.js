var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({uglifyOptions: {
      output: {
        comments: true,
      },
    }})],
  },
};
