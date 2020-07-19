function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__) //o prototype deles é igual e aponta para MeuObjeto()
console.log(MeuObjeto.prototype === obj1.__proto__ && MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Bunhak'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //mundando a referencia de Object.prototype para MeuObjeto.prototype
obj3.nome = 'Edwin' //e agora ele pode acessar os métodos herdados de MeuObjeto
obj3.falar()

//Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //TRUE
console.log(MeuObjeto.__proto__ === Function.prototype)//TRUE, existe um prototype de Função
console.log(Function.prototype.__proto__ === Object.prototype)///TRUE, o __proto__ de uma Function é um Object
console.log(Object.prototype.__proto__)//Null, não existe __proto__ de Object.prototype


console.log(MeuObjeto.__proto__) //=> aponta para uma [Function]
console.log(MeuObjeto.prototype) //=> aponta para o MeuObjeto{nome: 'Anonimo', falar: [Function]}