path = require('path')
CopyPlugin = require('copy-webpack-plugin')

module.exports =
  entry:
    avionics: './src/avionics/index.js'
    demo: './src/demo.coffee'
    demoKeys: './src/demoKeys.coffee'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: '[name].js',
  module:
    rules: [{
      test: /\.css$/
      use: ['style-loader', 'css-loader']
    },{
      test: /\.coffee$/
      use: ['coffee-loader']
    },{
      test: /\.html$/
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },{
      test: /\.js$/
      exclude: /node_modules/
      use:
        loader: 'babel-loader'
        options:
          presets: ['@babel/preset-env']
    }]
  plugins: [
    new CopyPlugin([
      patterns: [
        { from: 'node_modules/jasmine-core/lib/jasmine-core/jasmine.js', to: 'lib/jasmine' }
        { from: 'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js', to: 'lib/jasmine' }
        { from: 'node_modules/jasmine-core/lib/jasmine-core/boot.js', to: 'lib/jasmine' }
        { from: 'node_modules/jasmine-core/lib/jasmine-core/jasmine.css', to: 'lib/jasmine' }
        { from: 'node_modules/jasmine-core/images/jasmine_favicon.png', to: 'lib/jasmine' }
        { from: 'spec', to: 'spec' }
      ]
    ])
  ]
  resolve:
    extensions: ['.js', '.coffee']
  devServer:
    contentBase: path.join(__dirname, 'dist')
  # закоментировал, иначе не работает coffeescript
  watchOptions: { ignored: /node_modules/ }
