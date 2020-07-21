/*Em javascript, as classes nada mais são do que funções escritas com um jeito diferente, a herança das classes são baseadas em prototype*/

class Lancamento{
    constructor(nome = "Anonimo", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(ano, mes){
        this.ano = ano
        this.mes = mes
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(lanca => this.lancamentos.push(lanca))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(lanca => {
            valorConsolidado += lanca.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 2600);
const contaLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(2020, 08)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())