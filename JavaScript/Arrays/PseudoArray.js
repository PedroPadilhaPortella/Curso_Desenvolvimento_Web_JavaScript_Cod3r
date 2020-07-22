const pseudoArray = {0: 'Rafael', 1: 'Anna', 2: 'Carlos', 3: 'Jose'}
console.log(pseudoArray)
Object.defineProperty(pseudoArray, 'toString', {
    value: function(){return Object.values(this) },
    enumerable: false
})

console.log(pseudoArray[0])

const meuArray = ['Rafael', 'Ana', 'Carlos', 'Jose']

//veja como o array e o objecto são iguais
console.log(pseudoArray.toString(), meuArray)