/* ​Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console*/

function adicionarElementos(array01, array02){
    for (let i = 0; i < array02.length; i++) {
        console.log(array02[i])
        array01.push(array02[i])
    }
    console.log('Vetor adicionado: ' + array02)
    console.log('Vetor resultado: ' + array01)
}

array01 = [1, 2, 3, 4, 5]
array02 = [6, 7, 8, 9, 10]

adicionarElementos(array01, array02)