let dobro = function (a){
    return a * 2;
}
//funcao normal
console.log(dobro(3))


dobro = a => a * 2
//arrow function, return inplícito
console.log(dobro(Math.PI))



let ola = function(){
    return "olá"
}
//funcao sem parametros
console.log(ola())


ola = () => "Bom dia"
//arrow function sem parametros
console.log(ola())