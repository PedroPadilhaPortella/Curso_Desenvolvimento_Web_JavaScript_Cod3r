function nomeDoMes(mes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[--mes];
}

console.log(nomeDoMes(1)) // retornará "janeiro"
console.log(nomeDoMes(4)) // retornará "abril"