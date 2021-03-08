/*​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor*/

function MaiorMenor(array){
    let maiorAtual = 0
    let menorAtual = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maiorAtual){
            maiorAtual = array[i]
        }
        if(array[i] < menorAtual){
            menorAtual = array[i]
        }
    }
    return `Maior Valor: ${maiorAtual}\nMenorAtual: ${menorAtual}`;
}

const vetor = [9, 12, 31, 44, 8, 100, -100, -999]
console.log(MaiorMenor(vetor))