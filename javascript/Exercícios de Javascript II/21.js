// function menorNumero(array) {
//     let menor = array[0]
//     for (const el of array) {
//         if(el < menor) menor = el
//     }
//     return menor
// }

// const menorNumero = (array) => array.reduce((menor, numero) => numero < menor? numero : menor)

const menorNumero = (numeros) => Math.min(...numeros)

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15