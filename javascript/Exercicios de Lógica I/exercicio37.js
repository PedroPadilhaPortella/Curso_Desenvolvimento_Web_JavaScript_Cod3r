/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
bem como a soma dos elementos*/

function progressaoAritmetica(n, a1, r){
    for (let i = 0; i < n; i++) {
        console.log(`PA ${i + 1}: ${a1 + r*i}`)
    }
    return a1 + (n - 1) * r
}

function progressaoGeometrica(n, a1, q){
    for(let i = 0; i < n; i++){
        console.log(`PG ${i + 1}: ${a1*(q**i)}`)
    }
    return a1 * Math.pow(q, n - 1)
}

console.log(`PA: ${progressaoAritmetica(6, 4, 7)}\nPG: ${progressaoGeometrica(3, 1, 3)}`)