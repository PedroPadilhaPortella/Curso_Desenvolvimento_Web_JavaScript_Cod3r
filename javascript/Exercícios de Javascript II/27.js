// function inverter(objeto) {
//     const objetoInvertido = {}

//     Object.entries(objeto).forEach( parChaveValor => {
//         chave = 0,
//         valor = 1
//         objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
//     });
//     return objetoInvertido
// }

function inverter(objeto) {
    const paresChaveValorInvertidos = Object.entries(objeto).map(chaveValor => chaveValor.reverse());
    return Object.fromEntries(paresChaveValorInvertidos)
}

console.log(inverter({ a: 1, b: 2, c: 3})) // retornará { 1: "a", 2: "b", 3: "c"}
console.log(inverter({ nome: 'pedro', idade: 19, sexo: 'M'})) // retornará { '19': 'idade', pedro: 'nome', M: 'sexo' }