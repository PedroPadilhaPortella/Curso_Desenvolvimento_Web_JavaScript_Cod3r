const aprovados = ['agatha', 'pedro', 'joao', 'jihad']

/*A função callback Foreach passa tres parametros de um array, o nome, o indice e o proprio array*/

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.reverse()
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(indice, aprovado)
aprovados.forEach(exibirAprovados)