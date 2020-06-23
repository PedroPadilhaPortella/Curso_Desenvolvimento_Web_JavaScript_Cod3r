
//Primeio Método para gerar um valor padrão
function product01(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a * b * c
}

console.log(product01(), product01(3), product01(2, 3, 4), product01(0, 0, 0))

//Métodos usando operadores ternários ou IF-ELSE
function product02 (a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //método mais seguro dentre estes
    return a * b * c
}

console.log(product02(), product02(3), product02(2, 3, 4), product02(0, 0, 0))

//Parametro Padrão ES06
function product03 (a = 1, b = 1, c = 1){
    return a * b * c
}

console.log(product03(), product03(3), product03(2, 3, 4), product03(0, 0, 0))