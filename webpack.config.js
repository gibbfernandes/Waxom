var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /[node_modules]/

      }
    ]
  }
}
