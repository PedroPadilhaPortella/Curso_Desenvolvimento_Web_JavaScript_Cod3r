/*
executando funções que estão dentro de objetos (ou classes), chamando um atributo usando this,
para se referenciar ao próprio objeto
*/
const pessoa = {
    saudacao : "bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()


const falar01 = pessoa.falar
falar01() //conflito entre paradigmas: funcional e orientado a objeto

const falar02 = pessoa.falar.bind(pessoa)
falar02()

const falar03 = pessoa.falar()
falar03
