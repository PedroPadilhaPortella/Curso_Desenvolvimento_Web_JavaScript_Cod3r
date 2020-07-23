const alunos = [
    {nome: "Pedro", nota: 10.0, bolsista: true},
    {nome: "Vinicius", nota: 10.0, bolsista: false},
    {nome: "João", nota: 7.3, bolsista: true},
    {nome: "Gabriel", nota: 7.0, bolsista: false},
    {nome: "Lucas", nota:8.65, bolsista: true},
]

/*O reduce pode receber parametros, o valor acumulado, o valor atual, o indice e o array que será percorrido, podendo receber o valor inicial, mas é opcional*/

const resultado = alunos.map(a => a.nota).reduce((acc, atual) => acc + atual)
console.log(resultado.toFixed(2))

const total = alunos.map(a => a.nota).reduce(function(acumulado, atual) {
    console.log(acumulado, atual)
    return acumulado + atual
}, 0/*valor inicial, termo opcional*/)