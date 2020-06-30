/*
A função callback é uma função que é passada para outra e é executada assim que
determinado parametro é satisfeito.
O evento Callback nesse caso, é quando encontra um elemento de um array;

outro exemplo de callback são as requisições ajax, onde a função callback será chamada quando a requisição
retornar
*/

const fabricantes = ['Mercedes', 'AUDI', 'BMW', 'FORD', 'SCANIA']

function imprimirFabricante(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//O método ForEach pega um array e passa cada indice e valor por parametro para as outras funções
fabricantes.forEach(imprimirFabricante)
fabricantes.forEach(fabricante => console.log(fabricante))