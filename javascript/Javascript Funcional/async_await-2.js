function generateNumbersBetween(min, max, numerosProibidos) {
    [min, max] = min > max ? [max, min] : [min, max]
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio))
            reject('Numero repetido')
        else
            resolve(aleatorio)
    })
}

async function generateMegaSena(quantidade, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(quantidade).fill())
            numeros.push(await generateNumbersBetween(1, 60, numeros))
        return numeros
    } catch(e) {
        if(tentativas > 10)
            throw "Não deu certo"
        else 
            generateMegaSena(quantidade, tentativas + 1)
    }
}

generateMegaSena(10)
    .then(console.log)
    .catch(console.log)