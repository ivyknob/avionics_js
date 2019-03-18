merge = require('webpack-merge')
common = require('./webpack.config.coffee')

module.exports = merge(common, {
  mode: 'production'
})
