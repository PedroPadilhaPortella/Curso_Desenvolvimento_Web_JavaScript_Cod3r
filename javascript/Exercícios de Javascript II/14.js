// function objetoParaArray(objeto) {
//     const array = []
//     for(let key in objeto) {
//         array.push([key, objeto[key]])
//     }
//     return array
// }

// function objetoParaArray(objeto) {
//     const chaves = Object.keys(objeto)
//     const resultado = chaves.map( chave => [chave, objeto[chave]] )
//     return resultado
// }

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" })) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
console.log(objetoParaArray({ codigo: 11111, preco: 12000 })) // irá retornar [["codigo", 11111], ["preco", 12000]]
console.log(objetoParaArray({ nome: 'pedro', idade: 19, nacionalidade: 'Brasileiro' })) // irá retornar [["codigo", 11111], ["preco", 12000]]