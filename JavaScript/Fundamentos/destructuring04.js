//funcao que retorna um valor aletorio entre os parametros passados em objetos
//destructuring aplicado ao objeto passado por parametro
function rand ([min = 0, max = 1000] = []) {
    if(min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//valores passados
console.log(rand([0, 100]))
//apenas minimo
console.log(rand([100]))
//apenas maximo
console.log(rand([, 10]))
//nenhum valor, pega o valor padrao
console.log(rand([]))
//nenhum valor, pega o valor padrao
console.log(rand())