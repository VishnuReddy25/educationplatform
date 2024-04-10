const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    // ...other resolve configurations
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "crypto": [require.resolve("crypto-browserify"), require.resolve("crypto")],
      "querystring": require.resolve("querystring-es3"),
      "assert": require.resolve("assert/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};