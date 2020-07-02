class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pedro = new Pessoa('Pedro')
pedro.falar()