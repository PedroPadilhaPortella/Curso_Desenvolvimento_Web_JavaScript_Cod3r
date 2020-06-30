/*
A função não tem nenhum parametros, mas usando o método Arguments,
ela pode pegar todos os valores passados na função, independente de quantos sejam,
e pode manipulá-los dentro da função, por meio de um array.
*/
function somar(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i]
    }
    return soma;
}


console.log(somar())
console.log(somar(10))
console.log(somar(5.2, 4.99, 3, 60.111, -2))
console.log(somar(1.1, 2, "Teste"))
console.log(somar("Pedro", "Portella"))
console.log(somar(null, false))
