const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
const obj3 = {valor1: a, valor2: b, valor3: c}

const nomeAtributo = 'nota'
const valorAtributo = 7.5
const obj4 = {}
obj4[nomeAtributo] = valorAtributo

const nomeAtributo2 = 'media'
const valorAtributo2 = 6.9
const obj5 = {[nomeAtributo2]: valorAtributo2}

const obj6 = {
    funcao1: function(){
         //....//
    },
    funcao2(){
        //...//
    }
}

console.log(obj1, obj2, obj3, obj4, obj5, obj6);