const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'codigo-fonte.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', //adiciona CSS na DOM, injetando a tag <style>
                    'css-loader' //interpretar @import, url()...
                ]
            }
        ]
    }
}