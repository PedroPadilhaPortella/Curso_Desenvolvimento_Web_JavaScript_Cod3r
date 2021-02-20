/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function escreverNumerosporExtenso(numero){
    switch(numero){
        case 1:
            console.log("ONE")
            break;
        case 2:
            console.log("TWO")
            break;
        case 3:
            console.log("THREE")
            break;
        case 4:
            console.log("FOUR")
            break;
        case 5:
            console.log("FIVE")
            break;
        case 6:
            console.log("SIX")
            break;
        case 7:
            console.log("SEVEN")
            break;
        case 8:
            console.log("EIGHT")
            break;
        case 9:
            console.log("NINE")
            break;
        case 10:
            console.log("TEN")
            break;
        default:
                console.log("Invalid Number")
    }
}

escreverNumerosporExtenso(4)
escreverNumerosporExtenso(2)
escreverNumerosporExtenso(10)
escreverNumerosporExtenso(5)
escreverNumerosporExtenso(-1)
escreverNumerosporExtenso(8)
escreverNumerosporExtenso("um")
escreverNumerosporExtenso('7')