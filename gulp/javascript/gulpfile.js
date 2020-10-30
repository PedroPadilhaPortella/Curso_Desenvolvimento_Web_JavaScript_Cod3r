const gulp = require('gulp')
const { series, parallel } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //comentarios
            presets: ["env"], //versao do ecmascript
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build/js'))
}

function fim(call){
    console.log("Fim")
    return call()
}

exports.default = series(padrao, fim)