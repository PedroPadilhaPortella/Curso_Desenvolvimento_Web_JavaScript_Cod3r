function acontece(estudantes, minimo) {
    var quantidade = 0; //variável contadora
    for(var i = 0; i < estudantes.length; i++) {
        if(estudantes[i] <= 0) { //compara se o estudante [i] chegou na hora
            quantidade++;
        }
    }
    return quantidade >= minimo; //condição booleana
}

function aberturas(dias, minimo) {
    var respostas = []; //array de respostas
    for(var i = 0; i < dias.length; i++) {
        respostas[i] = acontece(dias[i], minimo);
    }
    return respostas;
}

console.log(acontece([10, -5, 3, 0], 2)) //true
console.log(acontece([10, -5, 3, 0], 3)) //false

console.log(aberturas([[10, -5, 3, 0], [10, -5, 3, 0]], 2)) // [true, true]
console.log(aberturas([[10, -5, 3, 0], [10, -5, 3, 0]], 3)) // [false, false]
