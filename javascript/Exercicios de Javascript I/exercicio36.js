/*​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5*/

function multiplicarVetor(array, multiplicador){
    let arrayResultante = []
    array.forEach(elemento =>{
        arrayResultante.push(elemento * multiplicador)
    })
    return multiplicarVetor2(arrayResultante, multiplicador)
}

function multiplicarVetor2(array, multiplicador){
    let arrayResultante = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 5){
            arrayResultante.push(array[i] * multiplicador)
        }
    }
    return arrayResultante
}

console.log(multiplicarVetor([4, 1, 3, -3, 10, 0], 2))