const escola = "Interlagos"

console.log(escola.charAt(6)) //funcao que retorna determinado caractere de uma string

console.log(escola.charCodeAt(6)) //valor desse caractere no Unicode, tabela ASCII

console.log(escola.indexOf('l')) //retorna o index de determinado caractere

console.log(escola.substring(3)) //retorna uma nova string a partir do 3 caractere

console.log(escola.substring(3, 7)) //retorna uma nova string entre o 3 e 5 caracteres

console.log('Escola '.concat('Adventista').concat(" de ").concat(escola)) //operador de concatenacao

console.log(escola.replace("Interlagos", "pedro")) //troca caracteres da string

console.log(escola.replace("t", "o")) //troca um  caractere da string

console.log("Pedro,Daniel,Samuel,Casalli,Bunhak,Luna".split(',')) //criar um array a partir de strings separadas por um caractere