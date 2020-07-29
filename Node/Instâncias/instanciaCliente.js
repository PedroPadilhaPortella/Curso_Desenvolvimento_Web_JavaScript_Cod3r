const contador1 = require('./instanciaUnica')
const contador2 = require('./instanciaUnica')
const contador3 = require('./InstanciaNova')()
const contador4 = require('./InstanciaNova')()

//o node faz cache dos modulos exportados
//ou seja, mesmo chamando o contador1 ou contador2, o valor será alterado nos dois

contador1.inc()
contador1.inc()
console.log(contador1.valor, contador2.valor)

//porem isso não acontece com a InstanciaNova porque são exportadas novas instancias de uma função diretamente da factory, então ele não salva o cache
contador3.inc()
contador3.inc()
console.log(contador3.valor, contador4.valor)