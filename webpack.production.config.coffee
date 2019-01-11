merge = require('webpack-merge')
common = require('./webpack.config.coffee')
CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin
      test: /bundle\.js$/
  ]
})
