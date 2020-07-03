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