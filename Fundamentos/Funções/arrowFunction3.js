let compararThis = function (param){
    console.log(this == param)
}

compararThis(global) //this aponta para global
compararThis(this)//false porque esse this não é global

const obj = {}
compararThis = compararThis.bind(obj) //alteramos o bind do this para objeto
compararThis(global) //aqui this não aponta mais para global
compararThis(obj) // e aponta para o objeto


let compararThisArrow = param => console.log(this === param)
compararThisArrow(global)
//em arrow function, o this aponta para o objeto do módulo atual, que nesse caso, é o arquivo arrowFunction3.js
//E não aponta para o Global do NodeJS
compararThisArrow(module.exports)//true
compararThisArrow(this)//true porque ele é o módule.exports



compararThisArrow = compararThisArrow.bind(obj)
compararThisArrow(obj) //nesse caso, o this não é alterada sua referencia e continua apontando para o module.exports
compararThisArrow(module.exports)