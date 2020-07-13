const sequencia = {
    _valor: 1,// convenção para mostrar que pretende ser privado
    get valor(){return this._valor ++},
    set valor(valor){
        if(this._valor < valor){
            this._valor = valor
        }
    }
}

sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 70 //menor que o anterior
console.log(sequencia.valor)
