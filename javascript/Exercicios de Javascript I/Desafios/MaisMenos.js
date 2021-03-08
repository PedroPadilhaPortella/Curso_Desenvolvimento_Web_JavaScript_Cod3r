//Essa função retorna um array com a porcentagem de valores positivos, negativos e nulos do array

function maisMenos (valores) {
    var positivos = 0;
    var zeros = 0;
    var negativos = 0;
    for (i = 0; i < valores.length; i++) {
        if (valores[i] > 0) {
            positivos = positivos + 1; 
        } else if (valores[i] < 0) {
            negativos = negativos + 1; 
        }else {
            zeros = zeros + 1; 
        }
    }
    positivos = positivos / valores.length;
    zeros = zeros / valores.length;
    negativos = negativos / valores.length;

    var resultado = [positivos, zeros, negativos];
    return resultado;
}

console.log(maisMenos([1, 2, 0, -1]))

console.log(maisMenos([3, 5, 0, 0, -3, -5, -1, 0]))

console.log(maisMenos([1, 2, 0, 0, 0, 0, 0, 7]))
