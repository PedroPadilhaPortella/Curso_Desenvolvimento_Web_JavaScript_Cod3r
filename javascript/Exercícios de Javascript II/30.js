const media = notas => notas.reduce((total, nota) => total += nota) / notas.length;

function recerberMelhorEstudante(estudantes) {
    const mediaEstudantes = Object.entries(estudantes).map(estudante => {
        chave = 0,
        valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    });

    const melhorEstudante = mediaEstudantes.sort((alunoA, alunoB) => alunoB.media - alunoA.media)[0];
    return melhorEstudante;
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
})) // retornará { nome: "Mariana", media: 7.875 }