//exportando um objeto

module.exports = {
    nome: 'pedro',
    idade: 19,
    peso: 70,
    altura: 1.72,
    falar(){
        return `meu nome é ${this.nome}`;
    }
}