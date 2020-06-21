const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log(`Aprovado \n${nota}`)
    }else{
        console.log(`Reprovado \n${nota}`)
    }
}

imprimirResultado(10)
imprimirResultado(6.8)
imprimirResultado("Pedrinho") //cuidado !!!