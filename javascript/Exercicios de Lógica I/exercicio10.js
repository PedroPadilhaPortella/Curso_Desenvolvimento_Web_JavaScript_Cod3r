/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

function DivisivelPor3 (numero){
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(DivisivelPor3(3))
console.log(DivisivelPor3(69))
console.log(DivisivelPor3(251))
console.log(DivisivelPor3(666))
console.log(DivisivelPor3(-12))