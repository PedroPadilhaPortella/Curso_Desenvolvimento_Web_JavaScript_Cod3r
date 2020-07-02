//class Pessoa
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p0 = new Pessoa('Pedro')
p0.falar()

//function Factory Pessoa
function Pessoa1(nome){
    this.nome = nome
    this.falar= function(){
        console.log(`Meu nome é ${this.nome}`)

    }
}

const p1 = new Pessoa1 ('Andre')
p1.falar()

//Factory usando arrow function
const pessoa = nome => {
    return{
        falar2: () => console.log(`Meu nome é ${nome}`)
    }
}

const joao = pessoa('Joao')
joao.falar2()