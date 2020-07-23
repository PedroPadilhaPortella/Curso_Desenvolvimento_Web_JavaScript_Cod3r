//criando um método Map2() a partir de um prototype
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json);
const getPrecos = array => array.preco;
let total = carrinho.map2(paraObjeto).map2(getPrecos).filter(soma)

console.log(total)