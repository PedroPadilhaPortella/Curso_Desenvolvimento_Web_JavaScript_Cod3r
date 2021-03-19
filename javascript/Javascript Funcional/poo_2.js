//Classe -> Função Constrututora
class Produto {;

    constructor(nome, preco, desconto) {
        this._nome = nome
        this._preco = preco
        this._desconto = desconto
    }

    get nome () {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get subtotal() {
        return "Subtotal: R$ " + this._preco * (1 - this._desconto)
    }

    set preco(novoPreco) {
        if(novoPreco >= 0) this._preco = novoPreco
    }
}

const produto1 = new Produto('Sabonete', 12.00, 0.8)
produto1.preco = -20
console.log(produto1)
produto1.nome = 'caneta'
console.log(produto1.nome)
console.log(produto1.subtotal)
