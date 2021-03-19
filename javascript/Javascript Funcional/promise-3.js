function generateNumbersBetween(min, max) {
    [min, max] = min > max ? [max, min] : [min, max]
    
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

generateNumbersBetween(0, 100)
    .then(n => `O numero gerado foi o ${n}`)    
    .then(console.log)