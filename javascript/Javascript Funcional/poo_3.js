function Produto(nome, preco, desconto = 0.15) {
    this.nome = nome
    this.preco = preco
    this._desconto = desconto

    this.subtotal = function() {
        return this.preco * (1 - this._desconto)
    }
}


Object.defineProperty(Produto.prototype, 'desconto', {
    get: function() {
        return this._desconto
    },
    set: function(novoDesconto) {
        if(novoDesconto >= 0 && novoDesconto <= 1) this._desconto = novoDesconto
    }
})

Object.defineProperty(Produto.prototype, 'descontoString', {
    get: function() {
        return `${this._desconto * 100}`
    }
})

Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}% de desconto`)
}

const p1 = new Produto('Caneta', 2.56)
p1.log()
p1.desconto = 0.6
console.log(p1.desconto)
p1.desconto = 1.2
console.log(p1.descontoString)