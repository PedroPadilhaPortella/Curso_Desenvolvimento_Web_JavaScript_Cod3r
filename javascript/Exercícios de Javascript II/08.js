function multiplicar(valor, iterador) {
    if(valor == 0 || iterador == 0) return 0;
    return (iterador === 1)? valor : valor + multiplicar(valor, iterador - 1)
}

// function multiplicar(numeroA, numeroB) {
//     if (numeroA === 0 || numeroB === 0) return 0
//     const maiorNumero = Math.max(numeroA, numeroB)
//     const menorNumero = Math.min(numeroA, numeroB)

//     function multiplicarRecursivamente(numero, multiplicador) {
//         return multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador - 1)
//     }
//     return multiplicarRecursivamente(maiorNumero, menorNumero )
// }

// function multiplicar(valor, iterador) {
//     let resultado = 0
//     for (let i = 1; i <= iterador; i++) {
//         resultado += valor
//     }
//     return resultado;
// }

console.log(multiplicar(5, 5)) // retornará 25
console.log(multiplicar(0, 7)) // retornará 0
console.log(multiplicar(1, 10)) // retornará 10
console.log(multiplicar(2, 90)) // retornará 180