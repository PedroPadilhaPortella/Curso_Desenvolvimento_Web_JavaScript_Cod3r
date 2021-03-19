const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, content) {
            resolve(content.toString())
        })
        console.log('reading...')
    })
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho).then(console.log)