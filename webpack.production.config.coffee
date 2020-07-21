{ merge } = require('webpack-merge')
common = require('./webpack.common.config.coffee')
HtmlWebpackPlugin = require('html-webpack-plugin')
htmlWebpackPluginOptions = require('./htmlWebpackPluginConfig.js')

module.exports = merge(common, {
  mode: 'production'
  plugins: common.plugins.concat(
    htmlWebpackPluginOptions.map(
      (i) -> new HtmlWebpackPlugin(
        merge(i, scriptSrc: "https://unpkg.com/@ivyknob/avionics_js")
      )
    )
  )
})
