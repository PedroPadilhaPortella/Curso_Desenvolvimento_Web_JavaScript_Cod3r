function Carro(delta = 5, velocidadeMaxima = 200){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
                velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

}