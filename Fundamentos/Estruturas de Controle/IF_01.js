function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`Nota: ${nota}`);
    }
}

soBoaNoticia(7);
soBoaNoticia(4);
soBoaNoticia(8);
soBoaNoticia(3);
soBoaNoticia(5);
////////////////////////////////////////////////////////////////////////////////
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`é verdade que ${valor}`)
    }
}
seForVerdadeEuFalo("pedro")
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('')
seForVerdadeEuFalo()
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2, 3])