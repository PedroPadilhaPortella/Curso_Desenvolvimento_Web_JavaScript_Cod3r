/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130*/

function planoDeSaude(idade){
    custo = 190
    if(idade < 10 && idade >= 0){
        custo += 80
    }else if(idade >= 10 && idade <= 30){
        custo += 50
    }else if(idade > 30 && idade <= 60){
        custo += 95
    }else if(idade > 60){
        custo += 130
    }else{
        return "Idade Inválida";
    }
    return `Custo do Plano de Saude para pessoa com ${idade} ano(s): ${custo}`
}

console.log(planoDeSaude(6))
console.log(planoDeSaude(1))
console.log(planoDeSaude(44))
console.log(planoDeSaude(19))
console.log(planoDeSaude(86))
console.log(planoDeSaude(-1))