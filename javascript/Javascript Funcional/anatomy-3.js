//Anonymous Function
const increment1 = function(n) {
    return n + 1
}

//Arrow Function
const increment2 = n =>  {
    return n + 1
}

const increment3 = n => n + 1

const sum =(a, b) => a + b

let a = 1
a = increment1(a)
a = increment2(a)
a = increment3(a)
console.log(a)
console.log(sum(3, 6))