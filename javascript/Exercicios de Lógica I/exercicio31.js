/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console*/

function valoresNegativos(array){
    let negativos = 0
    let arrNegativos = []
    for(let i = 0; i <= array.length; i++){
        if(array[i] < 0){
            negativos ++
            arrNegativos.push(array[i])
        }
    }
    console.log(negativos)
    console.log(arrNegativos)
}

vetor = [10, -1, -12, -8.88, 1000, 0, -11]
valoresNegativos(vetor)