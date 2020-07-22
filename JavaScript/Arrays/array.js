//Arrays são objetos, eles são dinânicos, podem ser adicionados dinamicamente e comportam diversos tipos de dados

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Pedro', 'Vinicius', 'Casalli', 'Bunhak', 'Esther')
aprovados[6] = 'Queren'
aprovados.push('Damares')
console.log(aprovados)

    /*Métodos de Array*/
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

aprovados.reverse()
console.log(aprovados)

delete aprovados[5]
console.log(aprovados)

//SPLICE: troca ou remove elementos, qunatos serão removidos, quantos elementos e o que será adicionado, é um método muito versátil
let alunos = ['ana', 'fernando', 'carlos']
alunos.splice(1, 1, 'pedro', 'marcos')
console.log(alunos)