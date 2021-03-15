//Anonymous Function

(function(a, b, c) {
    return a + b + c
})

//Function Expression
var sum = function (a, b) {
    return a  + b
}
console.log(sum(8, 9));
const outrasoma = sum
console.log(outrasoma(4, 7))