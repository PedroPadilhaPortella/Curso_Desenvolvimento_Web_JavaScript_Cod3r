//os modulos podem ser importados de um módulo baixado por npm (da pasta node modules), um modulo criado por voce (ou uma pasta com index dentro) ou um modulo nativo do node

const moduloB = require('./moduloB');
console.log(moduloB.falar());

const saudacao = require('saudacao');
console.log(saudacao.saudacao)

const moduloC = require('./moduloC');
console.log(moduloC.nome)

const http = require('http');
http.createServer((req, res) => {
    res.write('bom dia')
    res.end()
}).listen(8080)
