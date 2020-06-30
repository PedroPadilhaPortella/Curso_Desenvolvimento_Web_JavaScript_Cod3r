/*
Closure é o escopo criado quando uma função é declarada,
esse escopo permite a função acessar e manipular variáveis externas à função
*/

const valor = 'Global'

function fora (){
    const valor = 'Local'
    function dentro (){
        return valor
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())