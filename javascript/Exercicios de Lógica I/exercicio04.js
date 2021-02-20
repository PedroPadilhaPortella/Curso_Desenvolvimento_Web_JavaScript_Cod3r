/*​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores*/

function Divisao (dividendo = 0, divisor = 0){
    return `${dividendo} dividido por ${divisor} = ${dividendo/divisor}`;
}

console.log(Divisao(15, 3))
console.log(Divisao(169, 13))
console.log(Divisao(15, 200))
console.log(Divisao(13, 0))
console.log(Divisao(0, 0))
console.log(Divisao(0, 13))