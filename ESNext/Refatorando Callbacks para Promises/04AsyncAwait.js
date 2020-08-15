//O Objetivo do Async Await é simplificar o uso de Promises, 

const http = require('http');

const getTurma = turma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let resultado = ''

            response.on('data', dados => {
                resultado += dados
            })

            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} //retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

/*
Obter Alunos é uma função Assincrona que executa as tres chamadas ao mesmo tempo e retorna elas concatenando num array.
Depois eles são mapeandos para pegar apenas os nomes dos alunos e então exibir no console.
*/