/*Metodos de Criar Objetos*/

//objeto com notação literal
const obj1 = {}
console.log(obj1)

//Object em Javascript, usando função construtora new Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função construtora
function Produto(nome, preco, desconto){
    this.nome = nome //atributo publico
    this.getPrecoProduto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 4, 0.1);
const p2 = new Produto('Notebook', 2600, 0.15);
console.log(p1.getPrecoProduto(), p2.getPrecoProduto())


//função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Pedro', 2600, 4)
const f2 = criarFuncionario('Maria', 1300, 0)
const f3 = criarFuncionario('Agnes', 5000, 12)
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())

//Object Create
const filha = Object.create(null)
filha.nome = 'Larissa'
console.log(filha);

//Convertendo um JSON para Objeto
const jsonText = JSON.parse('{"nome": "Pedro"}')
console.log(jsonText.nome)