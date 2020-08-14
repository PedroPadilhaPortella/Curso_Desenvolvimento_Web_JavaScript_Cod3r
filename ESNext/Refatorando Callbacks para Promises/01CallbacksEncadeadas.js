//Desafio sem Promises, utilizando Callbacks normais
const http = require('http')

const getTurma = (turma, calback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
    http.get(url, response => {
        let resultado = ''
        response.on('data', dados => {
            resultado += dados
        })
 
        response.on('end', () => {
            calback(JSON.parse(resultado))
        })
    })
}

//Uso de Callbacks encadeadas, fazendo cada uma sua chamada e no final, chamando a próxima, chamado de Callback Hell

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))

        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})