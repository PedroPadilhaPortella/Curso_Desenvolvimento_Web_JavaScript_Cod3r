/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar*/

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        console.log('Novo vetor A: ' + vetorA)
        console.log('Novo vetor B: ' + vetorB)
    } else {
        console.log('Vetores de tamanhos diferentes.');
        console.log('Vetor A original: ' + vetorA)
        console.log('Vetor B original: ' + vetorB)
    }
}

let vetorA = [1, 2, 3, 12]
let vetorB = [4, -5, 0, 13]

trocaValores(vetorA, vetorB)