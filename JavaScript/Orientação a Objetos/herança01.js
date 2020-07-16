/*Os objetos em javascript tem uma referencia para o seu próprio protótipo, a partir da referencia para seu prototipo,
ele tem a referencia para outro objeto, com atributos e metodos que podem ser acessados pelo filho*/
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype) //O __proto__ de um objeto aponta para o Object.prototype, que é tecnicamente o construtor dele
console.log(Object.prototype.__proto__) //Object.prototype não tem um prototype

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)