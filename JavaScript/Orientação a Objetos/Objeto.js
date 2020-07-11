//crição dinamica de um objeto
const produto = new Object
produto.nome = 'Shampoo'
produto['marca do produto'] = 'Dove'
produto.preco = 7

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)


//criação estática de um objeto
const carro = {
    marca: 'Chevrolet',
    modelo: 'Prisma',
    ano: 2020,
    proprietario:{
        nome: 'lindaura',
        id: "0193764727421",
        idade: 52
    },
    condutores: [{
        nome: 'Pedro',
        idade: 19
    },{
        nome: 'edwin',
        idade: 22
    }]
}

/*editando elementos*/
carro.proprietario.nome = 'Antonio'
carro.condutores[1].nome = 'Daniel'
carro['condutores'][1]['idade'] = '11'
delete carro.marca

console.log(carro)