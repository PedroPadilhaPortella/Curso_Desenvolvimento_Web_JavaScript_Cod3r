function receberPrimeiroEUltimoElemento(array) {
    let result = []
    result.push(array[0])
    result.push(array[array.length -1])
    return result
}

// function receberPrimeiroEUltimoElemento(elementos) {
//     const indiceDoPrimeiroElemento = 0
//     const indiceDoUltimoElemento = elementos.length - 1
//     const primeiroElemento = elementos[indiceDoPrimeiroElemento]
//     const ultimoElemento = elementos[indiceDoUltimoElemento]
//     return [primeiroElemento, ultimoElemento]
// }

// function receberPrimeiroEUltimoElemento(elementos) {
//     const primeiroElemento = elementos.shift()
//     const ultimoElemento = elementos.pop()
//     return [primeiroElemento, ultimoElemento]
// }

// function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
//     const ultimoElemento = elementosRestantes.pop()
//     return [primeiroElemento, ultimoElemento]
// }

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"])) // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]
console.log(receberPrimeiroEUltimoElemento(["1 elemento só"])) // retornará [-100, 16]