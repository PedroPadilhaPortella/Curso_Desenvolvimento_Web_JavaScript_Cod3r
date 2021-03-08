/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor*/

function onlyImpares(a = 0, b = 100){
    let alt;
    if(a > b){
        alt = a
        a = b
        b = alt
    }
    console.log(`Numeros Impares entre ${a} e ${b}`)
    while (a <= b) {
        if(a % 2 == 1){
            console.log(a)
        }
        a++
    }
}

onlyImpares(30, 8);