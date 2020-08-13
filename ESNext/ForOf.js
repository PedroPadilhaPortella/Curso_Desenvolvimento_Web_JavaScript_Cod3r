//Novo modelo de estrutura de repetição, que ao invés de iterar em cima de indexes, como o ForIn, ele itera em cima de valores.

//O for-of percorre os valores do array e não o indice
let letraArray = []
for(let letra of 'Pedro') {
    letraArray.push(letra)
}
console.log(letraArray)


//O for-in trabalha em cima do index, enquanto o for-of em cima do proprio valor
const ecma = ['MAP', 'SET', 'PROMISES']

for(let i in ecma){
    console.log(i)
}

let ecmaArray =[]
for(i of ecma) {
    ecmaArray.push(i)
}
console.log(ecmaArray)


//Podemos fazer um For-Of em uma variavel do tipo Map, pegar suas chaves e valores
const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promises', {abordado: false}]
])

for(let assunto of assuntoMap) {
    console.log(assunto)
}

for(let chave of assuntoMap.keys()) {
    console.log(`Chaves: ${chave}`)
}

for(let value of assuntoMap.values()) {
    console.log(value)
}

for(let [key, value] of assuntoMap.entries()) {
    console.log(key, value)
}

//Podemos fazer um For-Of em uma variavel do tipo Set, pegar seus valores
const set = new Set(['a', 'b', 'c'])

for (const element of set) {
    console.log(element)
}