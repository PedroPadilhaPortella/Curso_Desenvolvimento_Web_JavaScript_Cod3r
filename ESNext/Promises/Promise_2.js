setTimeout(function () {
    //console.log('Executando callback 1...')
    setTimeout(function () {
        //console.log('Executando callback 2...')
        setTimeout(function () {
            //console.log('Executando callback 3...')
        }, 2000)
    }, 2000)
    
}, 2000)

/*um encadeamento de callbacks pode resolver um problema temporariamente, mas isso pode causar o Callback hell, que é esse encadeamento excessivo de callback, semelhante ao que acontece num encadeamento de IFs e ELSEs, e no caso, a Promise vem pra resolver esse Bad Smell do Código, como o Switch no if-else.*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Promessa Cumprida!!')
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor())
    .then(esperarPor())