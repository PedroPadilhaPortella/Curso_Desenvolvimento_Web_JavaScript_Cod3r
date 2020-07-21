/*A herança das classes são baseadas em prototype*/
class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//
class Pai extends Avo{
    constructor(sobrenome, profissao = 'comerciante'){
        super(sobrenome) //chama a funçao construtora da superclasse
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)