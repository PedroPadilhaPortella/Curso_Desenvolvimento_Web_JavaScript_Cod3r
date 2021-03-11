function isDivisible(dividendo, divisor) {
    return dividendo % divisor == 0
}

// function checarAnoBissexto(ano) {
//     return isDivisible(ano, 4) && !isDivisible(ano, 100) || isDivisible(ano, 400)
// }

// function checarAnoBissexto(ano) {
//     const divisivelPorQuatro = ano % 4 == 0
//     const divisivelPorCem = ano % 100 == 0
//     const divisivelPorQuatrocentos = ano % 400 == 0
//     return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
// }

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto(2020)) // retornará true
console.log(checarAnoBissexto(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
console.log(checarAnoBissexto(78)) // retornará false, pois não é multiplo de 4