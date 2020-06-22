
//funcao que recebe o array, desestrutura ele num for-in e exibe cada nota e sua média
function mediaAritmetica(notas){
    var total = 0
    for(let nota in notas){
        total += notas[nota];
        console.log(`Indice: ${nota} | Nota: ${notas[nota]}`)
    }
    var mediaFinal =  total / notas.length;
    console.log(`Media Final :: ${mediaFinal}`)
}

const notasSemestre = [10, 8.9, 4.5, 6.1]
mediaAritmetica(notasSemestre)



//O for - in também pode ser usado para exibir os atributos de objetos
const pessoa = {
    nome: 'Pedro',
    age: 19,
    height: 69,
    class: '2 semestre',
    course: 'ADS'
}

for(let att in pessoa){
    console.log(`${att} :: ${pessoa[att]}`)
}