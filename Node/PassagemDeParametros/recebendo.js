//receber parametros importados de um outro
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}