const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_module/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:4]'
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src'),
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: './index.html'
    })
  ]
};
