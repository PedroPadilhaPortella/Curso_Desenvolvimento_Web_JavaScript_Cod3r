let promise = new Promise(function(cumprirPromessa) {
    cumprirPromessa({to: 'Daniel', from:'Pedro', promise: 'Dar 10 reais', fulfill: true})
})

promise.then(valor => console.log(valor))

const minuscula = el => el.toUpperCase()

promise.then(valor => valor.promise)
    .then(minuscula)
    .then(console.log)