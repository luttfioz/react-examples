const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            retainLines: true,
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    // hot: true
  }
};
