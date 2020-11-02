const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'entry.js',
        path: __dirname + '/public'
    }
}