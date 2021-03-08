/*Faça um algoritmo que calcule o fatorial de um número*/

function fatorial(valor){
    if(valor == 1){
        return valor
    }else{
        return valor * fatorial(valor - 1)
    }
}

console.log(fatorial(5))
console.log(fatorial(7))
console.log(fatorial(9))
console.log(fatorial(4))
console.log(fatorial(3))