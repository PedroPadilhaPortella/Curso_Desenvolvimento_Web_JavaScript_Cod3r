Number.prototype.entre = function (inicial, final){
    return this >= inicial && this <= final
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)){
        console.log(`Quadro de Honra, Nota ${nota}`)
    }else if(nota.entre(7, 8.99)){
        console.log(`Aprovado, Nota ${nota}`)
    }else if(nota.entre(4, 6.99)){
        console.log(`Recuperação, Nota ${nota}`)
    }else if(nota.entre(0, 3.99)){
        console.log(`Reprovado, Nota ${nota}`)
    }else{
        console.log("Nota Inválida");
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4.7)
imprimirResultado(2.1)
imprimirResultado(-100)