const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function compileCss(){
    return gulp.src('src/sass/index.scss') //seleciona arquivo
        .pipe(sass().on('error', sass.logError)) //converte para sass
        .pipe(uglifycss({ 'uglyComments': true})) //permite comentários
        .pipe(concat('estilo.min.css')) //concatena
        .pipe(gulp.dest('build/css')) //salva no destino
}

function copyhtml(){
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(compileCss, copyhtml)