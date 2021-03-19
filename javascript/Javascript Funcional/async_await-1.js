function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log("Executando Promise...")
            resolve()
        }, time);
    })
}

// waitFor(2000)
//     .then(waitFor)
//     .then(console.log("Promise 1..."))
//     .then(waitFor)
//     .then(console.log("Promise 2..."))
//     .then(waitFor)
//     .then(console.log("Promise 3..."))
//     .then(waitFor)

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(1), 5000);
    })
}

async function executar() {
    let valor = await returnValue()
    await waitFor()
    console.log('Async Await ' + valor)
    await waitFor()
    console.log('Async Await ' + ++valor)
    await waitFor()
    console.log('Async Await ' + ++valor)

    return  ++valor
}

executar().then(console.log)