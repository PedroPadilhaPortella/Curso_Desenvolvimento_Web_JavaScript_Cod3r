function generateNumbersBetween(min, max, time) {
    [min, max] = min > max ? [max, min] : [min, max]
    
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, time);
    })
}

function generateSomeNumbers() {
    return Promise.all([
        generateNumbersBetween(1, 60, 1000),
        generateNumbersBetween(1, 60, 2000),
        generateNumbersBetween(1, 60, 500),
        generateNumbersBetween(1, 60, 1),
        generateNumbersBetween(1, 60, 4000),
        generateNumbersBetween(1, 60, 100)
    ])
}
console.time('promise')
generateSomeNumbers().then(n => console.log(n))
    .then(() => {
        console.timeEnd('promise')
    })
