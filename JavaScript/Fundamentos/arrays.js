//arrays em javascript são flexiveis,
//pois podem conter diversos tipos de arrays e tem tamanhos diversos

const valores = [12, 34.44, "pedro", true, arr = [1, 2, 3, 4, 5], obj = {nome: 'pedro', idade: 19}];

//adicionar valores
valores.push({id : 3}, false, -19)
//deletar valores => retorna <empty item>
delete valores[1];
//remover valores do array
valores.pop([-1])

console.log(valores);
//array é do tipo object
console.log(typeof valores);