function gerarAleatório(min, max) {
    if(min > max){
        let [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarAleatório(10, 20)
    .then(numero => `O numero gerado foi ${numero}`)
    .then(console.log)