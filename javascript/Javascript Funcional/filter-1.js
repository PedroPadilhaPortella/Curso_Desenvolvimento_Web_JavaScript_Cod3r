const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99},
    { nome: 'Impressora', quantidade: 0, preco: 890.90 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lápis', quantidade: 3, preco: 5.82 },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20 }
]

const maiorQueZero = item => item.quantidade > 0;

console.log(carrinho.filter(maiorQueZero).map(item => item.nome))