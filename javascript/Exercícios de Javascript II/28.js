// function filtrarPorQuantidadeDeDigitos(array, length) {
//     let resultado = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].toString().length == length)
//             resultado.push(array[i])
//     }
//     return resultado
// }

// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
//     let resultado = []
//     for (numero of numeros) {
//         const quantidadeDeDigitos = String(numero).length
//         if (quantidadeDeDigitos === quantidadeDesejada)
//             resultado.push(numero)
//     }
//     return resultado
// }

// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
//     return numeros.filter(numero => {
//         const quantidadeDeDigitos = String(numero).length
//         return quantidadeDeDigitos === quantidadeDesejada
//     })
// }

function filtrarPorQuantidadeDeDigitos(array, length) {
    return array.filter(numero => numero.toString().length == length)
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]