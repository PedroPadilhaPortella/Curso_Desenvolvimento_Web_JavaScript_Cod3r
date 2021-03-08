function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar("Leonardo")) // retornará "Olá, Leonardo!"
console.log(cumprimentar("Maria")) // retornará "Olá, Maria!"