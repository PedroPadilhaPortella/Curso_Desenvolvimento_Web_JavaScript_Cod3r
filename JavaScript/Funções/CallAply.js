function getPreco(imposto = 0, moeda = 'R$'){
    return `${this.moeda} ${this.preco * (1 - this.desconto) * (1 + this.imposto)}`;
}

const produto = {
    nome: "Notebook Lenovo",
    preco: 2400.00,
    desconto: 0.15,
    getPreco
}

console.log(getPreco())