//Anonymous Function adn IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    let x = "Teste1"
    console.log(x)
    console.log(`Results: ${a + b + c}`)
})(1, 2, 3);

(function (a, b, c) {
    let x = "Teste2"
    console.log(x)
})();

(() => {
    console.log("Arrow #01")
})();

(() => console.log("Arrow #02"))();