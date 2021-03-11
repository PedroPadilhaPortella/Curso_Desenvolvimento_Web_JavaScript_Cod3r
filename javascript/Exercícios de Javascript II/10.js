function simboloMais(quantidade) {
    let character = '+'
    return Array(quantidade).fill(character).join('')
}

// function simboloMais(quantidade) {
//     return "+".repeat(quantidade)
// }

// function simboloMais(quantidade) {
//     let character = '+'
//     let resultado = ''
//     for (let i = 0; i < quantidade; i++) {
//         resultado += character
//     }
//     return resultado;
// }

console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++"