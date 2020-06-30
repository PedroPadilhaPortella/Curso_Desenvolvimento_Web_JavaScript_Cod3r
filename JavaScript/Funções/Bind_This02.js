/*
Essa implementação retornara sempre um NaN, porque o this.idade não existe no contexto da função setInterval()
*/
function Pessoa01() {
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 2000)
}

new Pessoa01

/*
Essa implementação funcionara pois usamos o .bind(this) para referenciar o this na função Pessoa
*/
function Pessoa02 () {
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 2000)
}

new Pessoa02


/*
Essa implementação tambémfuncionara pois atribuimos o this à uma const, para referenciar o this na função Pessoa,
que só existe na funcao Pessoa, enquanto o this é global
*/
function Pessoa03 () {
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this), 2000)
}

new Pessoa03