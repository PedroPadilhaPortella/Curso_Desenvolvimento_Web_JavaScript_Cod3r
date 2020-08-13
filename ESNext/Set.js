//a estrutura Set é uma estrutura de conjunto, não indexada e não aceita repetição
//No caso Objetos e Arrays são estruturas indexadas

const times = new Set()
times.add('Palmeiras')
times.add('Corinthians').add('Santos').add('São Paulo')
times.add('Flamengo')

//Não aceita repetição
times.add('Santos')

console.log(times)
console.log(times.size)

console.log(times.has('Corinthians')) //has
console.log(times.has('palmeiras')) //has not
times.delete('Santos')

const animais = ['lagarto', 'coruja', 'peixe', 'coelho', 'peixe', 'peixe']
const newAnimals = new Set(animais)
console.log(newAnimals)