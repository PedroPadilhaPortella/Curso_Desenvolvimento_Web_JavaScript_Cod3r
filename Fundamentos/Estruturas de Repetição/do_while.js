function GerarInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = GerarInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)

}while(opcao != -1)