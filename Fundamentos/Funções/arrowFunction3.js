let compararThis = function (param){
    console.log(this == param)
}

compararThis(global) //this aponta para global


const obj = {}
compararThis = compararThis.bind(obj) //alteramos o bind do this para objeto
compararThis(global) //aqui this não aponta mais para global
compararThis(obj) // e aponta para o objeto