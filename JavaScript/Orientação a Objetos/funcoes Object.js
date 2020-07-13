const pessoa = {
    nome: 'rebeca',
    idade: 17,
    peso: 67
}

const keys = Object.keys(pessoa) //keys
console.log(keys)

const values = Object.values(pessoa) //values
console.log(values)

const entries = Object.entries(pessoa) //entries
console.log(entries)

Object.entries(pessoa).forEach(([chave, valor])/*destructuring*/ => {
    console.log(`${chave} => ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {   /*define property*/
    enumerable: true,   /*enumerável: sim*/
    writable: false,    /*alterável: não*/
    value: '10/06/2001' /*valor*/
});

pessoa.dataNascimento = '09/09/2009' //não alterável
console.log(pessoa.dataNascimento)
console.log(Object.entries(pessoa))

const dest = {}
const o1 = {a0: 1000, b2: true}
const o2 = {a1: 100, b2: false}
const obj = Object.assign(dest, o1, o2) //Une objetos
console.log(obj)

Object.freeze(pessoa) //congela o objeto