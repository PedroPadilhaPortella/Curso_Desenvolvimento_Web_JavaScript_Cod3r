//funcao sem retorno
function imprimirSoma (a = 0, b= 0){
    console.log(`Soma01 = ${a + b}`)
}
imprimirSoma(4, 5)


//funcao com retorno
function soma (a = 0, b= 0){
    return a + b;
}
console.log(`Soma02 = ${soma(4, 5)}`)

//Armazenar funcoes em variaveis com arrow function
const printSoma = (a, b) => (a + b)

console.log(`Soma03 = ${printSoma(4, 5)}`)


/*
const printSoma = function (a, b) {
    console.log(a + b)
}
printSoma(4, 5)
*/