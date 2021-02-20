/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

function juros(capitalInicial, taxa, tempo){
    let jurosCompostos = JurosCompostos(capitalInicial, taxa, tempo);
    let jurosSimples = JurosSimples(capitalInicial, taxa, tempo);
    console.log(`Calculo do capital de ${capitalInicial} à taxa de ${taxa} ao mês por ${tempo} meses:`);
    console.log(`Montante à Juros Simples: R$ ${jurosSimples.toFixed(2)}`);
    console.log(`Montante à Juros Compostos: R$ ${jurosCompostos.toFixed(2)}`);
    console.log("---------------------------------------")
}

function JurosSimples(capital, tx, t){
    let montante = capital + (capital *  (tx/100) * t)
    return montante;
}
function JurosCompostos(capital, tx, t){
    let montante = capital * Math.pow(1 + (tx/100), t)
    return montante;
}

juros(300, 1, 12)
juros(1000, 10, 12)
juros(600, 3, 1)