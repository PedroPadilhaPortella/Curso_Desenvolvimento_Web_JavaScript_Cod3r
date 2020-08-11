//tagged template => processar o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes) //retorna as partes da string
    console.log(valores) //retorna os valores/variaveis
    return 'outra string';
}

const aluno = 'pedro'
const situacao = 'aprovado'

console.log(tag `${aluno} esta ${situacao}.`)