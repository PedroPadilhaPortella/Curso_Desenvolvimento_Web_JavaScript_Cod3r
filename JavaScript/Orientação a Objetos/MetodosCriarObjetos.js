/*Metodos de Criar Objetos*/

//objeto com notação literal
const obj1 = {}
console.log(obj1)

//Object em Javascript, usando função construtora Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função cosntrutora
function Produto(nome, preco, desconto){
    this.nome = nome
}