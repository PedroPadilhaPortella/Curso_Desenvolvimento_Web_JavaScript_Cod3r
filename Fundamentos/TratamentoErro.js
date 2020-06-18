function tratarErroLancar(err){
    throw new Error('Seu código ta um cocô');
    //throw 10
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!!")
    }catch(err){
        tratarErroLancar();
    }finally{
        console.log("Se lascou!!")
    }
}

const obj = {nome : "Pedro Portella"} 
imprimirNome(obj);