const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(err, content) {
    console.log(content.toString())
}

console.log("loading....")
fs.readFile(caminho, exibirConteudo)
console.log("finished.")

console.log("Loading Sync....")
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Finished.")