console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof Function)

//criando um método no prototype de String
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
    /*quebra em array, inverte, junta de novo e retorna para String.prototype.reverse,
    qualquer String que chamar o reverse vai acionar essa função*/
}

console.log("Pedro Henrique Padilha Portella da Cruz".reverse())

Array.prototype.second = function(){
    return this[1]
}

const arr = [1, 9, 2, 8, 3, 7]
console.log(arr.second())
console.log(['pedro', 'gabriel', 'casalli'].second())

String.prototype.toString = function(){
    return 'Voce acabou de sobreescrever o método toStr'
}

console.log(''.reverse())