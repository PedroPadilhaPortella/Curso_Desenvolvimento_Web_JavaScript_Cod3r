//A estrutura Map é semelhante a um objeto, mas que pode ter como chave, diferentes estruturas, como funções, numeros e outros objetos.

const tecnologias = new Map();
tecnologias.set('react', {framework: false, language: 'javascript'})
tecnologias.set('laravel', {framework: true, language: 'php'})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('laravel').language)

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

//no map, ele recebe como paremetros primeiro o valor e depois a chave
chavesVariadas.forEach((value, key) => {
    console.log(key, value)
})

//verificando se esse objeto map tem uma chave chamada 123
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

//retorna o tamanho do Map, sendo que um foi excluido
console.log(chavesVariadas.size)

//as chaves não podem se repetir
chavesVariadas.set(123, [])
chavesVariadas.set(123, 'pedro')
chavesVariadas.set(null, [])
console.log(chavesVariadas)