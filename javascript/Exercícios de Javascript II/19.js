function calcularMedia(array) {
    return array.reduce((soma, valor) => soma += valor, 0) / array.length;
}

// function calcularMedia(numeros) {
//     const quantidadeDeNumeros = numeros.length
//     let somaTotal = 0
//     for (numero of numeros) {
//         somaTotal += numero
//     }
//     return somaTotal / quantidadeDeNumeros
// }

// function calcularMedia(numeros) {
//     const quantidadeDeNumeros = numeros.length
//     const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
//     return somaTotal / quantidadeDeNumeros
// }

console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornará 3