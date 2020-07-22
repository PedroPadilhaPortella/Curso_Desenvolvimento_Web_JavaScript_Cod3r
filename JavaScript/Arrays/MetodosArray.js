const pilotos = ['Vettel', 'Massa', 'Alonso', 'Haikkonen', 'Senna']
console.log(pilotos);

//remove o ultimo elemento do array
pilotos.pop();
console.log(pilotos);

//adiciona elementos na ultima posição do array
pilotos.push('Verstappen');
console.log(pilotos);

//remove o primeiro elementos do array
pilotos.shift();
console.log(pilotos);

//adiciona elementos na primeira posição do array
pilotos.unshift('Hamilton');
console.log(pilotos);

//removeu o segundo elementos e substituiu por outro
pilotos.splice(2, 1, 'Botas', 'Chumaker');
console.log(pilotos);

//retorna uma parte do array
const tresPrimeiros = pilotos.slice(0, 3);
console.log(`Tres Primeiros: ${tresPrimeiros}`);
const tresUltimos = pilotos.slice(-3);
console.log(`Tres Ultimos: ${tresUltimos}`);