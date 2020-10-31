const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


function appHtml() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

function appCss() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJs() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //sem comentarios
            presets: ["ENv"], //versao do ecmascript
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appImages() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHtml', appHtml)
gulp.task('appCss', appCss)
gulp.task('appJs', appJs)
gulp.task('appImages', appImages)

module.exports = { appHtml, appCss, appJs, appImages }