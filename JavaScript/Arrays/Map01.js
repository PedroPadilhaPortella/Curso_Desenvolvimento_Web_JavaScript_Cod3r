//O Map recebe um array de n elementos e retorna outro array de n elementos, fazendo alguma transformação nele,
//ele é um for com um propósito
const numero = [1, 2, 3, 4, 5, 6]
let resultado = numero.map(function(e) {
    return e * 2;
})
console.log(resultado)

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const dinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = numero.map(soma10).map(triplo).map(dinheiro);
console.log(resultado)