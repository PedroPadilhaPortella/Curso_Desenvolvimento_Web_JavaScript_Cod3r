// function segundoMaior(numeros) {
//     let indiceDoMaior = 0;
//     let segundoMaior = 0;

//     numeros.forEach((numero, indice) => {
//         if (numero > numeros[indiceDoMaior])
//             indiceDoMaior = indice
//     });

//     numeros.splice(indiceDoMaior, 1)
//     segundoMaior = numeros[0]

//     numeros.forEach(numero => {
//         if (numero > segundoMaior)
//             segundoMaior = numero
//     })
//     return segundoMaior;
// }

// function segundoMaior(array) {
//     const maiorNumero = Math.max(...array)
//     array = array.filter(numero => numero != maiorNumero)
//     const segundoMaior = Math.max(...array)
//     return segundoMaior
// }

function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    return numerosOrdenados[1]
}

console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6