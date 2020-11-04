const webpack = require('webpack')
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'entry.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniCssExtractPlugin.loader, //extrai css do arquivo entry.js
                //'style-loader', //adiciona css dentro da dom, injetando a tag <style>
                'css-loader', //interpreta @imports, urls()...
            ]
        }]
    }
}