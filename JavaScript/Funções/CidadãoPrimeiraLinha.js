/*
Funções em Javascript é First-Class Object (Citiziens)
Higher-order function
*/

//criar uma funcao literal
function funcao1(a){
    return Math.pow(a, 3)
}

//função anônima atribuida a uma constante/variavel
const funcao2 = function(a, b){
    return a - b
}

//função anônima atribuida a um array
const array = [function(a, b){return a + b}, funcao1, funcao2]

console.log(array[0](2, 3))
console.log(array[1](3))
console.log(array[2](2, 10))

//armazenar funções em atributos de objetos
const obj = {
    falar: function(){
        console.log("bom dia")
    }
}
obj.falar()


//Passar uma Função como parâmetro de outra função
function run(fun){
    fun()
}
run(function fun() { console.log("função passada como parametro")})


//Uma Função também pode retornar e contem uma outra função
function somar(a, b){
    return function (c){
        console.log(`Soma dos Valores: ${a + b + c}`)
    }
}
somar(2, 3)(5)
const somaVal = somar(10, 10)
somaVal(-30)