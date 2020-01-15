const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // mode: " development"
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归qmj所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new uglifyjswebpackplugin()
    ],
    devServer: {
        contentBase: '/dist',
        inline: true
    }
}