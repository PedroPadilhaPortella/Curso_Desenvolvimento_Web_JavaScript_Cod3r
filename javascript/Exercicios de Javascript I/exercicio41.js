let valor = 89;

let nota100 = 0
let nota50 = 0
let nota20 = 0
let nota10 = 0
let nota5 = 0
let nota2 = 0
let nota1 = 0

total = valor;

while(total >= 100) {
    nota100++
    total = total - 100
}

while(total >= 50) {
    nota50++
    total = total - 50
}

while(total >= 20) {
    nota20++
    total = total - 20
}

while(total >= 10) {
    nota10++
    total = total - 10
}

while(total >= 5) {
    nota5++
    total = total - 5
}

while(total >= 2) {
    nota2++
    total = total - 2
}

while(total >= 1) {
    nota1++
    total = total - 1
}

console.log(valor);

console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");