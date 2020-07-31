//leitura de arquivos
const fs = require("fs")
const arquivo = __dirname + '/arquivoLido.json';
const lorem = __dirname + '/arquivo.txt';

//leitura sincrona...
const conteudo = fs.readFileSync(arquivo, 'utf-8')
console.log(conteudo)

//leitura assincrona...
fs.readFile(arquivo, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//lendo arquivos json diretamente
const archive = require('./arquivoLido.json')
console.log(archive.db)

//lendo o conteudo da pasta/diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log("conteudos da pasta Node:")
    console.log(arquivos)
})

//lendo arquivo txt
fs.readFile(lorem, 'utf-8', (err, conteudo) => {
    console.log(conteudo)
})