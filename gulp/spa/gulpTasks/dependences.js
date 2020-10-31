const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depenciesCss(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({'uglyComments': true}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depenciesFonts(){
    return gulp.src('node_modules/font-awesome/font/*.*')
    .pipe(gulp.dest('build/assets/font'))
}

module.exports = {depenciesCss, depenciesFonts}