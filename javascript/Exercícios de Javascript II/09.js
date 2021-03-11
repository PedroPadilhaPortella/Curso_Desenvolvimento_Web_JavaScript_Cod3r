function repetir(valor, quantidade) {
    return Array(quantidade).fill(valor);
}

// function repetir(valor, iterador) {
//     let array = []
//     for (let i = 0; i < iterador; i++) {
//         array.push(valor)
//     }
//     return array
// }


console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) // retornará [7, 7, 7]