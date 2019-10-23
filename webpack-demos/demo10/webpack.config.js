module.exports = {
  entry: {
    app: './main.js',
  },
  output: {
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
