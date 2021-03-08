function fatorial (fat){
    resultado = 1;
    while(fat > 0){
        resultado = resultado * fat;
        fat = fat - 1;
    }
    return resultado;
}

console.log(fatorial(5));

console.log(fatorial(10));

console.log(fatorial(8));

console.log(fatorial(3));

console.log(fatorial(100));
