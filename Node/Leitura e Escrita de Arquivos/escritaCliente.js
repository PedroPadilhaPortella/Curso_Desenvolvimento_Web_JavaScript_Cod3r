const fs = require('fs');

const produto = {
    nome: 'celular',
    preco: 1999.00,
    modelo: 'iphone',
    bateria: '100 %'
}

fs.writeFile(__dirname + '/ArquivoEscrito.json', JSON.stringify(produto), (err) => {
    console.log(err || 'Arquivo Salvo!')
})