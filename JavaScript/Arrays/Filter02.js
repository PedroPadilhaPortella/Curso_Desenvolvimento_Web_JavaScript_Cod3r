Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray;
}

const produtos = [
    {nome: 'Notebook', preco:2999, fragil: true},
    {nome: 'Nokia 1200', preco:3799, fragil: false},
    {nome: 'Copo de vidro', preco:4.99, fragil: true},
    {nome: 'Copo de plástico', preco:0.99, fragil: false},
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))