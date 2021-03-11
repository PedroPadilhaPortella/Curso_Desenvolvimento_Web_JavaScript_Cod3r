function isPar(n) {
    return n % 2 == 0
}

// function receberSomenteOsParesDeIndicesPares(array) {
//     const pares = []
//     for (let i = 0; i < array.length; i++) {
//         if (isPar(array[i]) && isPar(i))
//             pares.push(array[i])
//     }
//     return pares
// }

// function receberSomenteOsParesDeIndicesPares(numeros) {
//     let resultado = []
//     for (let i = 0; i < numeros.length; i += 2) {
//         const numeroPar = isPar(numeros[i])
//         if (numeroPar)
//             resultado.push(numeros[i])
//     }
//     return resultado
// }

// function receberSomenteOsParesDeIndicesPares(numeros) {
//     return numeros.filter((numero, indice) => {
//         const numeroPar = isPar(numero)
//         const indicePar = isPar(indice)
//         return numeroPar && indicePar
//     })
// }

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => isPar(numero) && isPar(indice))
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]