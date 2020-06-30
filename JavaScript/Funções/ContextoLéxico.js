const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec (){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*
Será que vai mostrar Local ou Global??
*/