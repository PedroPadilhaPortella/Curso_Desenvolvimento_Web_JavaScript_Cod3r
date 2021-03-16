//PortellaReduce
Array.prototype.portellaReduce = function(fn, initial) {
    let acc = initial
    for (let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }
    return acc;
}

const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', quantidade: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', quantidade: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20, fragil: true }
]

const  getTotal = item => item.quantidade * item.preco
const somar = (acc, el) =>  acc + el

console.log(carrinho.map(getTotal).reduce(somar))