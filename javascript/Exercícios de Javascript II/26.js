// function removerVogais(frase) {
//     const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
//     vogais.forEach( vogal => frase = frase.replace(vogal, ''))
//     return frase
// }

function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Pedro Henrique Padilha Portella da Cruz")) // retornará "Pdr Hnrq Pdlh Prtll d Crz"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"