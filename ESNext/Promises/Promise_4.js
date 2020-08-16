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

//essa Promise irá chamar as 5 funções ao mesmo tempo e quando todas forem resolvidas, ele da o retorno e chama o then da função. No caso, ira resolver após 10 segundos, que é o maior tempo de requisição de promise.
function gerarVariosNumeros () {
    return Promise.all([
        gerarAleatório(10, 100, 1000),
        gerarAleatório(10, 100, 10000),
        gerarAleatório(10, 100, 300),
        gerarAleatório(10, 100, 500),
        gerarAleatório(10, 100, 10000),
    ])
}

    console.time('tempo de execução')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('tempo de execução')
    })
