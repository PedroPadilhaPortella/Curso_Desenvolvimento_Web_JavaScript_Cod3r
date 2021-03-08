/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas*/

function calculadora(valor1, valor2, operacao){
    switch (operacao) {
        case '+':
            return valor1 + valor2
            break;
        case '-':
            return valor1 - valor2
            break;
        case '*':
            return valor1 * valor2
            break;
        case '/':
            if(valor2 == 0){
                return 'O valor 2 não pode ser nulo'
            }
            return valor1 / valor2;
            break;
        case '%':
            return valor1 % valor2
            break;
        default:
            return 'Operação Inválida';
            break;
    }
}

console.log(calculadora(10, 18, '+'))
console.log(calculadora(4, 3, '-'))
console.log(calculadora(7, 7, '*'))
console.log(calculadora(130, 10, '/'))
console.log(calculadora(19, 0, '/'))
console.log(calculadora(131, 5, '%'))