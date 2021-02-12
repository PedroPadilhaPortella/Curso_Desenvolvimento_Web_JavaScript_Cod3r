const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV !== 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: devMode ? 'development': 'production',
    entry: './src/principal.js',
    output: {
        filename: 'codigo-fonte.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        // new TerserPlugin({
        //     parallel: true,
        //     terserOptions: {
        //         ecma: 6
        //     }
        // })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/, //regex que encontra arquivos scss, sass ou css
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', //adiciona CSS na DOM, injetando a tag <style>
                    'css-loader', //interpretar @import, url()...
                    'sass-loader' //interpretar códigos sass e scss
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            }
        ]
    }
}