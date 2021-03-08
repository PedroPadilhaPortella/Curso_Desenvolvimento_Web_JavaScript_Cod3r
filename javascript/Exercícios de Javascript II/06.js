function inverso(value) {
    if(typeof value == 'boolean') return !value
    if(typeof value == 'number') return -value
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof value}`
}

console.log(inverso(true)) // retornará false
console.log(inverso("6")) // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso(-2000)) // retornará 2000
console.log(inverso("programação")) // retornará "booleano ou números, mas o parâmetro é do tipo string"