function Pessoa(){
    this.idade = 0
    setInterval(() => {
            this.idade++
            console.log(this.idade)
            //em funções arrow, o this não varia dentro dela
    }, 2000)
}

new Pessoa