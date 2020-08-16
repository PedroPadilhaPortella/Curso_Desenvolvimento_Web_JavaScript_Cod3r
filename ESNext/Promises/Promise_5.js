function tryIt(valor, changeErro) {
    return new Promise((resolve, reject) => {
        try {
            consol.log('erro aqui')
            if (Math.random() < changeErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

tryIt('Pedro', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => consol.log(valor),
        //erro => console.log(`Tratamento: ${erro}`)
    )
    .catch(err => console.log(`ERRO GERAL: ${err}`)) //tratamento de um reject ou de qualquer erro da Promise
    .then(() => console.log('fim!'))