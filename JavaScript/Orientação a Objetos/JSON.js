let pessoa = {nome: 'Roberta', idade: 16, cidade: 'Braganey', estudando: true, pais: {pai: 'Roberto', mae: 'Alicia'}, gatos: ["Pixie", "Neguinho", "Chuchu"],
falar(nome){return `Meu nome é ${nome}`}}

//converter para JSON
let jsonEncode = JSON.stringify(pessoa)
console.log(jsonEncode)

//converter para Object
let jsonDecode = JSON.parse(jsonEncode)
console.log(jsonDecode)