const alunos = [
    {nome: "Pedro", nota: 10.0, bolsista: true},
    {nome: "Vinicius", nota: 10.0, bolsista: true},
    {nome: "João", nota: 7.3, bolsista: true},
    {nome: "Gabriel", nota: 7.0, bolsista: false},
    {nome: "Lucas", nota:8.65, bolsista: true},
]


const algumBolsista = alunos.map(aluno => aluno.bolsista).reduce((res, bolsa) => res || bolsa)

const todosBolsista = alunos.map(aluno => aluno.bolsista).reduce((res, bolsa) => res && bolsa)
console.log(`Algum é Bolsista? ${algumBolsista}`)
console.log(`Todos são bolsistas? ${todosBolsista}`)