const anonimo = process.argv.indexOf('-spkn') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Kadjin!!\n')
    process.exit()
}else{
    process.stdout.write('Usuario Desconhecido,\nPor favor Informe o seu Nome ou Login: ')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}