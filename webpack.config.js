const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const env = process.env.NODE_ENV

module.exports = {
  mode: env || 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader', // inject CSS to page
          //'css-loader', // translates CSS into CommonJS modules
          'sass-loader' // compiles Sass to CSS
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
