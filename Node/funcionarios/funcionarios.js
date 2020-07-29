const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response =>{
    const funcionarios = response.data

    //mulher chinesa com menor salario
    const chineses = f => f.pais === 'China'
    const mulheres = f => f.genero === 'F'
    const menorSalario = (func, funcAtual) => { return func.salario < funcAtual.salario? func : funcAtual }

    const pessoa = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(pessoa)
})



