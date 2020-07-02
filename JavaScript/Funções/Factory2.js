
function criarProduto (nome, preco){ 
    return{
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Salgado', 3.5))