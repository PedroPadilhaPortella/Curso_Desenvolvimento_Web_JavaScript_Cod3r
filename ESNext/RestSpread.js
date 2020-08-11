//O operador de Rest(juntar) e Spread(espalhar) pode ser usado para juntar elementos de um array ou espalhar esses elementos.
/* ... */

//spread com objetos
const funcionarios = {nome: 'maria', salario: 1200.00}
const clone = { ativo: true, ...funcionarios}
console.log(clone)

//spread com arrays
const subgrupo = ['pedro', 'gabriel', 'joão']
const grupo = ['agnes', 'linda', ...subgrupo, 'esther']
console.log(grupo)