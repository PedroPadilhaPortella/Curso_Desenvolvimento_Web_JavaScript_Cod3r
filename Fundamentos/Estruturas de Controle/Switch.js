const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log(`Quadro de Honra: ${nota}`)
            break
        case 8: case 7:
            console.log(`Aprovado: ${nota}`);
            break
        case 6: case 5: case 4:
            console.log(`Recuperação: ${nota}`)
            break
        case 3: case 2: case 1: case 0:
            console.log(`Reprovado: ${nota}`)
            break
        default:
            console.log("Valor Inválido")
    }
}

imprimirResultado(10)
imprimirResultado(6.7)
imprimirResultado(4.6)
imprimirResultado(1.2)
imprimirResultado(-11)