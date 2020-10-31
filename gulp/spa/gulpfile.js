const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHtml, appCss, appJs, appImages } = require('./gulpTasks/app')
const { depenciesCss, depenciesFonts } = require('./gulpTasks/dependences')
const { monitorarArquivos, server } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImages),
        series(depenciesCss, depenciesFonts)
    ),
    server,
    monitorarArquivos
)