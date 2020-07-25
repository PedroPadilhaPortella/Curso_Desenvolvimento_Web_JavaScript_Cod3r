const alunos = [
    {nome: 'Joao', nota: 7.8 },
    {nome: 'Maria', nota: 8.5 }
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

/*a vantagem de usar metodod declarativos é que o codigo fica mais reutilizável e coeso, além de não precisar pensar na estrutura e sim no que voce busca*/