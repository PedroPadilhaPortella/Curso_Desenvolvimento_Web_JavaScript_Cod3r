const notas = [10, 4.2, 2.4, 6.5, 7.8, 8, 9.9, 1]

//adicionando elementos 'notas baixas menores que 7' no array notasBaixas
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

const notasBaixas2 = notas.filter(nota => nota < 7) //callback de um filter

console.log(notasBaixas2)