const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo (caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function(err, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Leitura Assíncrona...')
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(conteudo => conteudo.join('\t\t'))
    .then(conteudo => console.log(conteudo))