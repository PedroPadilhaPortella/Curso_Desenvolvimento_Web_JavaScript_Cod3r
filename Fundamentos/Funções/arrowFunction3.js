let compararThis = function (param){
    console.log(this == param)
}

compararThis(global)
