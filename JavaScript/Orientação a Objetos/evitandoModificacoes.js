//Object.preventExtensions()
//previne que haja adição de atributos
const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 19.99,
    tag: 'random'
});
console.log(`Extensível: ${Object.isExtensible(produto)}`)

produto.nome = 'borracha'
produto.descricao = "borracha escolar branca"
delete produto.tag
console.log(produto)

//Object.seal(selar)
//sela o objeto e impede adição e deleção de propriedades
const pessoa = {nome: 'Juliana', idade: 22, nacionalidade: 'Brasileira'}
Object.seal(pessoa)
console.log(`Selado: ${Object.isSealed(pessoa)}`)
pessoa.sexo = 'feminino'
delete pessoa.idade
pessoa.nome = 'Joyce'
console.log(pessoa)