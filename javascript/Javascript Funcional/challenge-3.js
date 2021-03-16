//Funcoes que retornam outras funcões

function somar(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

const multiplicar = (a, b) => a * b
const subtrair = (a, b) => a - b

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

console.log(somar(3)(4)(5))
console.log(calcular(3)(7)(multiplicar))
console.log(calcular(3)(7)(subtrair))