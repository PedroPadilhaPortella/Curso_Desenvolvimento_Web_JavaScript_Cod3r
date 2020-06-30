/*
Funções Anonimas costumam ser usadas quando atribuidas a uma variavel ou constante,
Também podem ser passadas como parametros para outras funcoes e
Criadas dentro de objetos.
*/

const soma = function(x, y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 5); //dois parametros, a funcao usara o padrão soma para o terceiro
imprimirResultado(3, 5, soma); //tres parametros
imprimirResultado(3, 5, function(x, y){ 
    return x - y
}); //passando uma funcao por parametro
imprimirResultado(3, 4, (x, y) => x * y) //passando uma arrow function por parametro



const pessoa = {
    falar: function(){
            console.log('salveee')
    }
}
pessoa.falar()