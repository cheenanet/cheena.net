const path = require('path')

const env = process.env.NODE_ENV

module.exports = {
  mode: env || 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          'sass-loader' // compiles Sass to CSS
        ]
      }
    ]
  }
}
