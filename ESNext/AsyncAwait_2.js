function gerarAleatório(min, max, descartados) {
    if(min > max){
        let [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
        if(descartados.includes(aleatorio)) {
            reject('Numero Repetido !')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let i of Array(qtdNumeros).fill()) {
            numeros.push(await gerarAleatório(1, 60, numeros))
        }
        return numeros;
    }catch(e) {
        if(tentativas >= 10) {
            throw 'Excedido Numero de Tentativas!!'
        }else{
            return gerarMegaSena(qtdNumeros, tentativas ++)
        }
    }

}

gerarMegaSena(100)
    .then(console.log)
    .catch(console.log)