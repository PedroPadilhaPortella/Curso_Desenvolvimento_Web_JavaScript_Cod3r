const pessoa = {
    nome: 'Pedro Henrique',
    idade: 19,
    genero: 'masculino',
    cep: {
        cidade: "São Paulo",
        estado: 'SP',
        pais: "Brasil"
    }
}
//destructuring em objetos atribuido a uma variavel padrão
const {nome, idade} = pessoa
console.log(nome, idade)

//destructuring em objetos atribuido a uma variavel especifica
const {genero: gender, cep: id} = pessoa
console.log(gender, id)

//destructuring em objetos atribuido a um parametro que não existe no objeto e com valor padrão
const {sobrenome, masculino = true} = pessoa;
console.log(sobrenome, masculino)

//destructuring de objetos aninhados
const {cep:{cidade, estado, pais}} = pessoa
console.log(cidade, estado, pais)