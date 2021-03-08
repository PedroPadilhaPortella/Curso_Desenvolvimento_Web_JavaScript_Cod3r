/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros*/

function mediaArray(array){
    let media = array.length
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return (total / media).toFixed(1)
}


vetor = [10, 6, 6, 7.6, 10, 9.1]
console.log(mediaArray(vetor))