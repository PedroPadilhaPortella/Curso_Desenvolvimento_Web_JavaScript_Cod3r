const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99},
    { nome: 'Impressora', quantidade: 0, preco: 890.90 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lápis', quantidade: 3, preco: 5.82 },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20 }
]

const  getTotal = item => item.quantidade * item.preco
const somar = (acc, el) => 
    {
        console.log(acc, el)
        return acc + el
    }

const totalGeral = carrinho.map(getTotal).reduce(somar, 0)
console.log(totalGeral)