function alturaArvoreUtopica (ciclos) {
    altura = 0;
    for (var i = 0; i <= ciclos; i++){
        if (i % 2 == 0  || i == 0){
            altura = altura + 1;
        }else{
            altura = altura * 2;
        }
    }
    return altura;
}

var tempo = 5
const alturaFinal = alturaArvoreUtopica(tempo)
console.log(`A altura da árvore após ${tempo} estações será de ${alturaFinal} metros.`)