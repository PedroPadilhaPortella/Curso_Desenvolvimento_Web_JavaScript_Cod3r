function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Introdução ao Javascript', 01)
const aula2 = new Aula('Operadores', 02)
console.log(aula1, aula2)

//Simulando operador NEW, pegando a função e os parametros dela e atribuido a um objeto construtor

function novo(f, ...params){
        const obj = {}
        obj.__proto__ = f.prototype
        f.apply(obj, params)
        return obj
}

const aula3 = novo(Aula, 'Orientação a Objetos', 03)
const aula4 = novo(Aula, 'Banco de dados', 04)
console.log(aula3, aula4)