function compras (trabalho01, trabalho02) {
    const comprarSorvete = trabalho01 || trabalho02
    const comprarTv50 = trabalho01 && trabalho02
    //const comprarTv32 = !!(trabalho01 ^ trabalho02)/bitwise xor
    const comprarTv32 = trabalho01 != trabalho02
    const manterSaudavel = !comprarSorvete

    //retorno de objetos com valor implicito
    return {
        comprarSorvete,
        comprarTv32,
        comprarTv50,
        manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))