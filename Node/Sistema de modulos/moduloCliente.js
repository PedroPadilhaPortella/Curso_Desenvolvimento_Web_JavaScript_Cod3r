const moduloA = require('./moduloA.js');
const moduloB = require('./moduloB.js');
const moduloC = require('./moduloC');

console.log(moduloA)
console.log(moduloB)
console.log(moduloB.falar())
console.log(moduloC.nome)

const _ = require('lodash');
setInterval(() => console.log(_.random(1, 100)), 1000)