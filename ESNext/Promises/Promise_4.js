function gerarAleatório(min, max, tempo) {
    if(min > max){
        let [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)

     })
}

function gerarVariosNumeros () {
    return Promise.all([
        gerarAleatório(10, 100, 1000),
        gerarAleatório(10, 100, 10000),
        gerarAleatório(10, 100, 300),
        gerarAleatório(10, 100, 500),
        gerarAleatório(10, 100, 2000),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))