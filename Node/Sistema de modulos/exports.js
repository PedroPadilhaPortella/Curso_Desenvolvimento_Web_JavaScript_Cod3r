//o module.exports é um objeto vazio que pode ser incrementado para ser exportado
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = {
    nome: 'marcos'
}

console.log(module.exports)

module.exports = null
console.log(module.exports)
//mesmo sendo possivel exportar a partir destes tres metodos, o principal é o module.exports