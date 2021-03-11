function contarCaractere(caractereBuscado, frase) {
    let contador = 0

    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado)
            contador++

    return contador
}

// function contarCaractere(caractereBuscado, frase) {
//     return [...frase].filter(caractere => caractere === caractereBuscado).length
// }

console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornará 1
console.log(contarCaractere("r", "O rato roeu a roupa do rei de roma, a rainha com raiva, rasgou o resto")) // retornará 1
console.log(contarCaractere("T", "teste Teste teste")) // retornará 1