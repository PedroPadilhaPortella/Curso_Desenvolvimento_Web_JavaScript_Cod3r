//funcao que retorna um valor aletorio entre os parametros passados em objetos
//destructuring aplicado ao objeto passado por parametro
function rand ({min = 0, max = 1000} = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//passando obj
const obj = {max: 100, min: 0}
console.log(rand(obj))
//passando objeto apenas com o valor maximo
console.log(rand({max: 10}))
//sem passar nada no array
console.log(rand({}))
//sem passar nada
console.log(rand())