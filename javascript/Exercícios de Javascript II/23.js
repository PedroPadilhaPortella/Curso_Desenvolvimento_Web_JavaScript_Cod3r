function contarPalavras(frase) {
    let palavras = frase.split(' ')
    return palavras.length
}

console.log(contarPalavras("Sou uma frase")) // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornará 5
console.log(contarPalavras("the quick brown fox jumps over the lazy dog")) // retornará 5