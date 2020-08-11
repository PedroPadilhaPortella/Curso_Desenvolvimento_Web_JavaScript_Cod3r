function real(partes, ...valores) {
    const resultado = []
    valores.forEach( (valor, indice) => {

        //verifica se é valor numerico e converte para string
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`; 

        //adiciona no array resultado, alternando partes e valores
        resultado.push(partes[indice], valor) 
    })
    return resultado.join('') //retorna o array juntando os elementos do array
}

const preco = 29.99
const parcelado = 11
console.log(real `Por ${preco} ou 3x de ${parcelado}`)