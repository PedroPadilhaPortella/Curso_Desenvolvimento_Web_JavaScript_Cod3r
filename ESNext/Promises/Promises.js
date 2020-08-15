//Promessa, é usada quando você quer ter um processamento assincrono, que pode resultar em uma Resolved Promise ou em uma Rejected Promise
//É semelhante a usar Callbacks
console.log(typeof Promise)

function speakAfter (tempo, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, tempo * 1000)
    })
}

speakAfter(3, 'Bom dia cara')
    .then(frase => frase.concat('!!'))
    .then(frase => console.log(frase)) //then : pode ser chamada quantas vezes precisar para gerar um encadeamento de operações sobre o que é recebido como resposta de uma Promise
    .catch(err => console.log(err)) //tratamento de error em Promises