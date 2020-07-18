const pai = {nome: 'Pedro', cabelo: 'preto'}

const filho1 = Object.create(pai); //cria o objeto filho1 tendo como prototype o objecto pai
console.log(filho1.cabelo)//como não tem esse atributo definido, ele busca no protótipo

const filho2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
filho2.nome = "Rogerio"; //não dá pra alterar porque é writable

console.log(`${filho2.nome} tem cabelo ${filho2.cabelo}`);

console.log(Object.keys(filho1), Object.keys(filho2)) //não tem nehuma chave pq não foi adicionado, enumerable = false

for(let key in filho2){
    filho2.hasOwnProperty(key)? console.log(`Chave Própria: ${key}`) : console.log(`Por Herança: ${key}`);
}
/*para saber se a propriedade é do próprio objeto ou se é herdado*/