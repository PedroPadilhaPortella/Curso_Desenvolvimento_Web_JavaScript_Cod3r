//Função Construtora
function Produto(nome, preco, desconto = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.subtotal = function() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Caneta', 2.56)
console.log(p1)
console.log(p1.subtotal().toFixed(2))

const p2 = new Produto('Geladeria', 2345.99)
console.log(p2)
console.log(p2.subtotal().toFixed(2))
