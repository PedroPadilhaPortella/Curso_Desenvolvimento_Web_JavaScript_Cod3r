const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', quantidade: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', quantidade: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', quantidade: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20, fragil: true }
]

//1. Frágil == true
//2. Quantidade * preco -> total
//3. Média

const data = carrinho.filter(produto => produto.fragil).map(produto => produto.quantidade * produto.preco)
            .reduce((acc, el) => {
                const novaQuantidade = acc.quantidade + 1
                const novoTotal = acc.total + el
                return {
                    quantidade: novaQuantidade,
                    total: novoTotal,
                    media: (novoTotal / novaQuantidade).toFixed(2)
                }
            }, { quantidade: 0, total: 0, media: 0})

console.log(data)