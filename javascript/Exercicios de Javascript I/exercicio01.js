/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function calculadora (val1 = 0, val2 = 0){
    console.log("SOMA:", val1 + val2)
    console.log("SUBTRAÇÃO:",val1 - val2)
    console.log("PRODUTO:", val1 * val2)
    if(val2 != 0){
        console.log("DIVISÃO:", val1 / val2,"\n-----------------------------------")
    }else{
        console.log("O segundo valor é zero, não dá pra dividir \n-----------------------------------")
    }
}

calculadora(10, 20);
