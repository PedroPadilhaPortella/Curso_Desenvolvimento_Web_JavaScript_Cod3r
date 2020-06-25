/*
executando funções que estão dentro de objetos (ou classes), chamando um atributo usando this,
para se referenciar ao próprio objeto
*/
const obj = {
    saudacao : "bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

obj.falar()


const falar = obj.falar
falar() //conflito entre paradigmas: funcional e orientado a objeto

const falarPessoa = obj.falar.bind(obj)
falarPessoa()

const falar = pessoa.falar
falar()