const nome = "pedro";
const nome2 = "daniel";
const template = "template string";
console.log(`${nome} é irmao de ${nome2}`); //variaveis com template string
console.log(`Escrito com ${template}`);
console.log(`1 + 1 = ${1+1}`); //operacoes com template string

let up = texto => texto.toUpperCase();
console.log(`Eii...${up("cuidado")}!!`); //chamada de funcao com template string