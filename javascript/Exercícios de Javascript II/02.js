function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}

console.log(converterIdadeEmAnosParaDias(25)) // retornará 9125
console.log(converterIdadeEmAnosParaDias(70)) // retornará 25550