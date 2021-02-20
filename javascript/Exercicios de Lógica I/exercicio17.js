/*Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function calcularPlanoSalario(plano, salario){
    switch(plano){
        case 'A':
            novoSalario = salario * (1.1)
            break;
        case 'B':
            novoSalario = salario * (1.15)
            break;
        case 'C':
            novoSalario = salario * (1.2)
            break;
        default:
            return "Plano Inválido"
    }
    return `Novo Salario: ${novoSalario}`
}


console.log(calcularPlanoSalario('A', 1200))
console.log(calcularPlanoSalario('B', 4700))
console.log(calcularPlanoSalario('C', 600))
console.log(calcularPlanoSalario('a', 3900))
console.log(calcularPlanoSalario('PLANO REAL', 5050))