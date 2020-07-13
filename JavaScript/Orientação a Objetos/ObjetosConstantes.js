//objetos apontam para enderecos de memória
const pessoa = {
    nome: 'pedro'
}
pessoa.nome = 'joao'

console.log(pessoa)

//tentando fazer a variavel apontar para um endereco diferente
//pessoa = {idade: 19}
//console.log(pessoa)

Object.freeze(pessoa) //->congela o objeto, então ele não pode mais ser alterado em nenhum atributo, nem adicionado
pessoa.nome = 'carlos'
delete pessoa.nome
console.log(pessoa)

const carro = Object.freeze({marca: "fiat", modelo: 2001})
//objeto inalterável