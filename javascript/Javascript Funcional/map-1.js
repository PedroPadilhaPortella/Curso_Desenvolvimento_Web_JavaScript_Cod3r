const array = [1, 2, 3, 4, 5]

const dobroMaisIndiceDivididoPeloComprimentoDoArray = (value, index, array) => (value * 2 + index) / array.length;

console.log(array.map(dobroMaisIndiceDivididoPeloComprimentoDoArray))


const nomes = ['Ana', 'Pedro', 'Marcos', 'Ingrid', 'Edwin']
const firstLetter = string => string[0]
const letras = nomes.map(firstLetter)
console.log(nomes, letras)


const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99},
    { nome: 'Impressora', quantidade: 0, preco: 890.90 },
    { nome: 'Caderno', quantidade: 4, preco: 27.10 },
    { nome: 'Lápis', quantidade: 3, preco: 5.82 },
    { nome: 'Tesoura', quantidade: 1, preco: 19.20 }
]

const produtos = carrinho.map(prod => prod.nome)
console.log("\nProdutos: " + produtos)
console.log("---CARRINHO---\nSubtotal: ")
const subtotal = carrinho.map(el => "R$ ".concat(el.preco * el.quantidade).replace('.', ','))
console.log(subtotal)

const total = carrinho.map(el => el.preco * el.quantidade).reduce((total, subtotal) => total += subtotal);
console.log("Total: R$ ".concat(total.toFixed(2).toString().replace('.', ',')))