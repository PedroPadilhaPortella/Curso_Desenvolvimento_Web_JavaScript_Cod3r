const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')


function server(callback){
    return gulp.src('build')
    .pipe(webserver({
        port: 8080,
            open: true,
            livereload: true,
    }))
}

function monitorarArquivos(){
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.js', () => gulp.series('appCss')())
    watch('src/**/*.css', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImages')())
}

module.exports = { monitorarArquivos, server }