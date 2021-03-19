function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            conn.log('temp')
            if(Math.random() < chanceErro)
                reject('Ocorreu um erro!')
            else
                resolve(valor)
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao("testing...", 0.5)
    .then(
        valor => console.log(valor),
        err => console.error(`Erro especifico: ${err}`))
    .catch(console.error)
    .then(console.log('finished'))