/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido*/

function pagarAnuidade(mes, valor){
    if(mes == 1){
        return `Valor a ser pago no mês ${mes}: ${valor.toFixed(2)}`
    }
    return `Valor a ser pago no mês ${mes}: ${(valor * Math.pow(1.05, mes - 1)).toFixed(2)}`
}

console.log(pagarAnuidade(1, 1000))
console.log(pagarAnuidade(2, 1000))
console.log(pagarAnuidade(5, 1000))
console.log(pagarAnuidade(12, 1000))
console.log(pagarAnuidade(9, 1000))