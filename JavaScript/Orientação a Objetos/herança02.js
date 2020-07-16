//Cadeia de protótipos (prototype chain) herança dos objetos
Object.prototype.att0 = '0'
const avo = {att1: 'A'}
const pai = {__proto__: avo, att2: 'B'}
const filho = {__proto__: pai, att3: 'C', att2:'sobre'}

console.log(filho.att0, filho.att1, pai.att2, filho.att3)

//polimorfismo => sobreposição
console.log(`Sobreposição: ${filho.att2}`)

const carro = {
    velAtual: 0,
    velMa: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `Velocidade Atual = ${this.velAtual} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 //sobreposicao
}

const volvo = {
    modelo: 'V40',
    velMax: 110,//sobreposição
    status(){
        return `Volvo ${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //agora ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro) //agora volvo tem carro como protótipo

console.log(ferrari, volvo)
volvo.acelerar(100)
console.log(volvo.status())//chama metodo sobreposto
ferrari.acelerar(300)
console.log(ferrari.status())  //chama metodo herdado de carro