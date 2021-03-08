/*​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações*/

function Intervalo(vetor){
    let Intointerval = 0
    let outOfInterval = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20)
            Intointerval++
       else{
           outOfInterval++
       }
    }
    return `Valores entre 10 e 20: ${Intointerval} \nValores fora deste intervalo: ${outOfInterval}`;
}

const array = [10, 52, 14, 12, 1, 100, 18, 90]
console.log(Intervalo(array))