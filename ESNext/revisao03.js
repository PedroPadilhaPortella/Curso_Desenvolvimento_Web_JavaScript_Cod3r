// ES8 : Object.keys, Object.values e Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


//Melhorias na Notação Literal de Objectos
const nome = 'Carla'
const pessoa = {
    nome,
    ola () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
pessoa.ola()


//Classes
class Animal{
    falar() {
        return 'auau'
    }
}
class Cachorro extends Animal{}

console.log(new Cachorro().falar())