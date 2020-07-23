Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (acumulado, atual) => acumulado + atual

const numeros = [10, -9, 11, -10, 8, 7, 3]

const resultado = numeros.reduce2(soma, -10)

console.log(resultado)