//A Promise recebe uma função como parametro, essa função só pode receber um unico valor, mas esse valor pode ser um array ou um objeto também.

let promessa = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        retornoPromessa: 'retorno da promise',
        valor: 12,
        names: ['Pedro', 'Samuel', 'Daniel']
    })
})
//O a função passada no then() será chamada no momento que a promise for cumprida, o resultado de um then é passado para outro then()

let divisao = (valor) => valor / 2;

function ConvertToString(valor) {
    return `Resultado: ${valor}`
}

promessa.then(obj => obj.valor)
    .then(valor => valor ** 2)
    .then(divisao)
    .then(ConvertToString)
    .then(console.log)

//Podemos usar funções externas para fazer uma ação e chama-la no then()


