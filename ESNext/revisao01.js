//var, let e const
{
    var a = 2
    var b = 3
    const c = 4
    
}
console.log(a)
//console.log(b)
//console.log(c)



//Template String
var name = 'pedro portella'
var string = `\tO meu nome\n é ${name}`;
console.log(string)



//Destructuring em strings, arrays e objects
const [l, e, ...tras] = 'Cod3r';
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {nome, idade: i} = {idade: 19, nome: 'pedro'}
console.log(nome, i)