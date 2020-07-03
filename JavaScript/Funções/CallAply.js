/*
Existem diversas maneiras de acessar funções associdas a objetos,
pode ser por meio de atributos globais (linha 18 e 19), por meio do nome_do_objeto.nome_da_funcao() (linha 21),
ou usando o método call() ou o método apply()
*/

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: "Notebook Lenovo",
    preco: 2400,
    desconto: 0.15,
    getPreco
}

global.preco = 1000
global.desconto = 0.1
console.log(getPreco())

console.log(produto.getPreco())


const carro = {preco: 40000, desconto: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'US$')) //call, os parametros são passados diretamente
console.log(getPreco.apply(carro, [0.20, 'US$'])) //apply, precisa de um array para passar os parametros