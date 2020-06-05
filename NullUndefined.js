let a  //undefined, não inicializada
console.log(a) 

a = null //ausência de valor, não aponta para nenhum endereco memória
console.log(a)

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 19.99
console.log(produto.preco) //preco foi setado

produto.preco = undefined
console.log(produto) //preco undefined

produto.preco = null
console.log(produto) //preco null