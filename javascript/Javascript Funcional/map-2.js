//portellaMap criado no prototype
Array.prototype.portellaMap = function (fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        mapped.push(fn(this[i], i, this))
    }
    return mapped;
}


const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99},
    { nome: 'Impressora', quantidade: 0, preco: 890.90 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lápis', quantidade: 3, preco: 5.82 },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20 }
]

const subtotal = carrinho.portellaMap(el => "R$ ".concat(el.preco * el.quantidade).replace('.', ','))
console.log(subtotal)