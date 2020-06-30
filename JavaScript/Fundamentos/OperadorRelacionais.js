//OPERADORES RELACIONAIS

console.log("1)", '1' == 1);
console.log("2)", '1' === 1);
console.log("3)", '3' != 3);
console.log("4)", '3' !== 3);

console.log("5)", 3 > 2);
console.log("6)", 3 < 2);
console.log("7)", 3 >= 2);
console.log("8)", 3 <= 2);

const data01 = new Date(0);
const data02 = new Date(0);
console.log("9)", data01 == data02);

console.log("10)", data01.getTime() == data02.getTime());
console.log("11)", undefined == null);
console.log("12)", undefined === null);