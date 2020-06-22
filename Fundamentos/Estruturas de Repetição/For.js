function mediaAritmetica(notas){
    var total = 0;
    for(var i = 0; i < notas.length; i++) {
     total += notas[i];
    }
    var media = total / notas.length;
    console.log(media)
}

const notasSemestre = [10, 8.9, 4.5, 6.1]
mediaAritmetica(notasSemestre)