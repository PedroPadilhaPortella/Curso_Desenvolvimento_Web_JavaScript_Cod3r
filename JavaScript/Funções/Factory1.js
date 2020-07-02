//Factory é uma função que retorna um objeto
//exemplo básico
function criarPessoa(){
    return{
        nome: 'Carlos',
        idade: 21,
        sexo: 'masculino'
    }
}

console.log(criarPessoa())