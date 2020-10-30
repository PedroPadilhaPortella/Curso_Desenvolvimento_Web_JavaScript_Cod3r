// const { series, parallel } = require('gulp');

const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

/* As tarefas do gulp podem ser executadas em série ou em paralelo*/


const antes1 = callback => {
    console.log("Starting Gulp...")
    return callback()
}

const antes2 = callback => {
    console.log("Starting Tasks...")
    return callback()
}

function copiar(callback){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const depois = callback => {
    console.log("Finishing Gulp...")
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    depois
);