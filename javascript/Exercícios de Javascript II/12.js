// function removerPropriedade(object, property) {
//     const data = Object.assign({}, object)
//     delete data[property]
//     return data;
// }

function removerPropriedade(object, property) {
    const data = { ...object }
    delete data[property]
    return data;
}

console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2}
console.log(removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao")) // retornará {id: 20, nome: "caneta"}