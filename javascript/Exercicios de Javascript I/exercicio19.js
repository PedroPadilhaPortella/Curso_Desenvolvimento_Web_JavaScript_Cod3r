/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto  Preço
100    Cachorro Quente       R$ 3,00
200    Hambúrguer Simples    R$ 4,00
300    Cheeseburguer         R$ 5,50
400    Bauru                 R$ 7,50
500    Refrigerante          R$ 3,50
600    Suco                  R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente*/

function adicionarProduto(codigo, quantidade){
    let total = 0
    let produto
    switch(codigo){
        case 100:
            produto = 'Cachorro Quente'
            total = 3 * quantidade;
            break;
        case 200:
            produto = 'Hambúrguer Simples'
            total = 4 * quantidade;
            break;
        case 300:
            produto = 'Cheeseburguer'
            total = 5.5 * quantidade;
            break;
        case 400:
            produto = 'Bauru'
            total = 7.5 * quantidade;
            break;
        case 500:
            produto = 'Refrigerante'
            total = 3.5 * quantidade;
            break;
        case 600:
            produto = 'Suco'
            total = 2.5 * quantidade;
            break;
        default:
            return 'Produto não encontrado!'
    }
    return `Produto: ${produto}\n  Quantidade:${quantidade}\n    Total:R$${total.toFixed(2)}`
}

console.log(adicionarProduto(500, 4))