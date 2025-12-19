const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            // inject CSS into the page
            { loader: 'style-loader' },
            // translates CSS into CommonJS modules
            {
              loader: 'css-loader',
              options: { url: false }
            },
            // process Tailwind CSS and autoprefixer
            { loader: 'postcss-loader' },
            // compiles Sass to CSS (keeps custom SCSS)
            'sass-loader'
          ]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    })
  ]
}
