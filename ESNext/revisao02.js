//Arrow Function
const soma = (a, b) => a + b
console.log(soma(4, 5))

//O This de Arrow Function sempre apontam para module.exports
const lexical1 = () => console.log(this === exports)
const lexical2 = lexical1.bind({})
lexical1()
lexical2()
//mas em funções normais, a referencia do this pode ser mudada, com o bind() por exemplo


//Default Parameters
function log(texto = 'npm'){
    console.log(texto)
}
log()
log('yarn')


//Rest Operator / Spread Operator
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(5, 0, 1, 5, 3, -11, -10, 9))