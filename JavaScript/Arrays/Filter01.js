/*filtrar um array*/

const produtos = [
    {nome: 'Notebook', preco:2999, fragil: true},
    {nome: 'Nokia 1200', preco:3799, fragil: false},
    {nome: 'Copo de vidro', preco:4.99, fragil: true},
    {nome: 'Copo de plástico', preco:0.99, fragil: false},
]

const caro = produto => produto.preco >= 500
const fragilidade = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragilidade))