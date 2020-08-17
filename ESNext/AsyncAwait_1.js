function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000)
    })
}

//Usando o async/await, a função irá esperar cada função ser resolvida para então executar a próxima linha, além de retornar uma promise no final
async function executar() {
    let valor = await retornarValor()
    await esperarPor(3000)
    console.log('Async/Await')
    await esperarPor(3000)
    console.log('Async/Await')
    await esperarPor(3000)
    console.log('Async/Await')
    return valor
}

//maneira correta de receber uma promise
executar().then(valor => console.log(`valor 1: ${valor}`))

//essa maneira vai receber uma promise pendente e só irá mostrar quando for resolvida
const value = executar()
console.log(`Valor 2:: ${value}`)

//outra forma de rebecer o valor de uma promise, é usando uma outra funçãoa assincrona
async function receberValor() {
    const valor = await executar()
    console.log(`Valor 3:: ${valor}`)
}
receberValor()


//funcao que retorna valor em uma promise abstraida
async function returnValue() {
    return 20
}
returnValue()