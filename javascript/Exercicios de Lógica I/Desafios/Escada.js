function escada(altura){
    let lista = [];
    for(let i = 1; i <= altura; i++){
      let espaco = altura - i;
      lista.push(" ".repeat(espaco) + "#".repeat(i));
    }
    return lista;
  }
console.log(escada(7)) //constroi uma escada de 7 degraus
