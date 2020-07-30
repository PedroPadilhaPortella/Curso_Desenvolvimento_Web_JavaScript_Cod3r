//enviando parametros para um arquivo importado
const saudacoes = require('./recebendo')('Pedro', 'Samuel', 'Daniel')

saudacoes.forEach(saudacao => {
    console.log(saudacao)
})