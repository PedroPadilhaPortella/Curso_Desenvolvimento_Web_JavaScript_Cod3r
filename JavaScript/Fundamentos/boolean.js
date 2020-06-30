let isActive = false;
console.log(isActive);
isActive = 1;
console.log(!!isActive);

//true
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));
//false
console.log(!!NaN);
console.log(!!undefined);
console.log(!!0)
//retorna o primeiro true
console.log('' || 0 || false || NaN || "oi");
//usado para criar valores padrões usando || (ou)
