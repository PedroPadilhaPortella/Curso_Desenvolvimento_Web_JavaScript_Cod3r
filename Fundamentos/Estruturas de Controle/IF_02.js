function teste01 (num){
    if(num > 20)
        console.log(num)//esta linha está associada ao bloco IF
    console.log("final")//esta linha não está associada ao bloco IF
}

teste01(10)
teste01(30)

function teste02 (num){
    if(num > 20); /*esse IF não tem nenhuma sentença, cuidado com o ; */ {
        console.log(num)
    }
}

teste02(-10)