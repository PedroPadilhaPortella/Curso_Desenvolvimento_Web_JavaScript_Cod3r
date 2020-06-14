// VAR VS LET
{
    {
        {
            {
                {
                    {
                        var sera = 'Será!?';
                    }
                }
            }
        }
    }
}
//Variaveis com Var são visiveis em todo o código, pois tem Escopo Global e Escopo de Função
console.log(sera);

function teste () {
    var local = 200;
}
//porém não é visível fora de uma função, ou dentro de uma funcao
teste();
//console.log(local)


//escopo global de Var
var valor = 1
{
    valor = 2
    console.log(valor)
}
console.log(valor)


//As variaveis declaradas com Let tem Escopo Global, Escopo de Função e Escopo de Bloco
let numero = -1
{
    console.log(numero)  
    numero = 1
    console.log(numero)
}
console.log(numero)