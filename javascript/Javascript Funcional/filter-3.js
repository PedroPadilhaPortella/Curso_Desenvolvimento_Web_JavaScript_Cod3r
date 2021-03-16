Array.prototype.portellaFilter = function(fn) {
    const filtered = []
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            filtered.push(this[i])
        }
    }
    return filtered;
}

const impostos = [
    { nome: 'Rendimentos',  total: 30000, tributavel: false },
    { nome: 'Salário', total: 50000, tributavel: true },
    { nome: 'Renda Fixa', total: 12000, tributavel: true },
    { nome: 'Renda Variável', total: 80000, tributavel: true },
    { nome: 'Freelance', total: 18000, tributavel: false },
]

const imposto = impostos.portellaFilter(imposto => imposto.tributavel && imposto.total > 30000)
const total = imposto.map(el => el.total).reduce((total, subtotal) => total += subtotal, 0) * 0.01;

console.log("IMPOSTO DE RENDA")
console.log(imposto)
console.log(`TOTAL: ${total}`)
