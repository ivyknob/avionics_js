merge = require('webpack-merge')
common = require('./webpack.common.config.coffee')
HtmlWebpackPlugin = require('html-webpack-plugin')
htmlWebpackPluginOptions = require('./htmlWebpackPluginConfig.js')

module.exports = merge(common, {
  mode: 'development'
  plugins: common.plugins.concat(htmlWebpackPluginOptions.map((i) -> new HtmlWebpackPlugin(i)))
})
