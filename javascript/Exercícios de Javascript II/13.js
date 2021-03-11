// function filtrarNumeros(array) {
//     const numerics = []
//     array.forEach(element => {
//         if(typeof element == 'number')
//             numerics.push(element)
//     });
//     return numerics
// }

// function filtrarNumeros(array) {
//     const resultado = []
//     for(let item of array)
//     if(typeof item === "number")
//     resultado.push(item)
//     return resultado
// }

function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []
console.log(filtrarNumeros(["a", true, '19' + 10, 0, true + 1, false - 12])) // retornará [0, 2, -12]