const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry:'./src/index.js',

  output:{
    path:path.resolve(process.cwd(),'dist'),
    filename:'[name].[chunkhash:8].js'
  },

  plugins:[
    new HtmlWebpackPlugin()
  ]
}