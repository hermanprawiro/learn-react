var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  devtool: 'source-map',
  output: {
    filename: './js/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['latest', 'react']
        }
      }
    ]
  }
};
