

//function declaration, possui hoisting
console.log(soma(3, 6))

function soma(x, y){
    return x + y
}

//function expression, não rem hoisting
const subtracao = function (x, y){
    return x - y
}
console.log(subtracao(3, 6))
//named function expression
const mult = function mult (x, y){
    return x * y
}
console.log(mult(3, 6))