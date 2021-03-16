//Arrow Functions

const aniversario = () => console.log("Feliz Aniversário")
aniversario()

const saudacao = nome => console.log(`Fala ${nome}!`)
saudacao('Pedro')

const somar = (...numeros) => {
    let soma = 0
    for(let n of numeros)
        soma += n
    return soma
}
console.log(somar(4, 5, 7, -10))

// const potencia = base => {
//     return function(exp) {
//         return Math.pow(base, exp)
//     }
// }
const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(8)(2))

//this e prototype
//Arrays Function tem um this diferente das funçoes normais

Array.prototype.log = function() {
    console.log(this)
}

Array.prototype.lastElement = function() {
    return (this[this.length - 1])
}

Array.prototype.average = function() {
    const sum = this.reduce((total, n) => total += n, 0)
    return sum / this.length;
}

const numbers = [1, 2, 3, 4]
numbers.log()
console.log(numbers.lastElement())
console.log(numbers.average())