//usando Promises, sem utilizar Callbacks normais
const http = require('http')

const getTurma = (turma) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;

    return new Promise((resolve, reject)=> {
        http.get(url, response => {

            let resultado = ''

            response.on('data', dados => {
                resultado += dados
            })

            response.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(err){
                    reject(err)
                }
            })
        })
    })
}

//Refatoramento de Callbacks aninhadas para Promises aninhadas, onde cada função é chamada uma de cada vez.

var nomes = []

getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))

    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))

        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))

            console.log(nomes)
        })
    })
})
