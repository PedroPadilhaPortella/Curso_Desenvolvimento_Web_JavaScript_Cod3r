function somarNumeros(array) {
    return array.reduce((x, y) => x += y)
}

// function somarNumeros(numeros) {
//     const quantidadeDeNumeros = numeros.length
//     return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
// }

// function somarNumeros(numeros) {
//     let soma = 0
//     numeros.forEach(numero => soma += numero)
//     return soma
// }

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60