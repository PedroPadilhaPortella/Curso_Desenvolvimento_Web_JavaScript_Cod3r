//BREAK:: para totalmente a execução do código
//CONTINUE:: apenas interrompe a repetição atual, ele ignora o ciclo atual

function GerarInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0
while(true){
    opcao = GerarInteiroAleatorioEntre(0, 100)
    if(opcao >= 70){
        continue
    }
    console.log(opcao)
    if(opcao == 19 || opcao == 21 || opcao == 11 || opcao == 61 || opcao == 53){
        break; //O break desviara o bloco de repeticao mais próximo
    }
 
}
//////////////////////////////////////////////////////////////////////////////////

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
externo: for(x in nums){
    for(y in nums){
        if(x == 2 && y == 5) break externo
        console.log(`${x} == ${y}`)
    }
}
/*
nesse segundo exemplo, usando um rótulo, 
quando o if atingir a condição, ele aciona o break no primeiro For
*/


