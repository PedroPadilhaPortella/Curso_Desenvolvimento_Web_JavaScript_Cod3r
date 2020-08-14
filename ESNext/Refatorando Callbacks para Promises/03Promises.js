//Apenas Promises
const http = require('http')

const getTurma = (turma) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;

//Promise que cria um metodo http.get(), pegando os dados e transformando em formado de objeto, se algo der errado, ele vai entar no try-catch e retornar o reject.
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

let nomes = []

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(err => console.log(err.message))

/*
O Promises.all passa um array de funções que esperam ser resolvidas ou rejeitadas em paralelo, e então irá realizar os then...
Concatenando os arrays de turmas em um só, mapeando os alunos para pegar apenas os nomes dos alunos e então exibir no console.
*/

getTurma('D').catch(err => console.log(err.message))