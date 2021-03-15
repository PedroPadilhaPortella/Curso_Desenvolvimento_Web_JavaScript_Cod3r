//Functions that returns other functions
//Curring

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(107.9));

// console.log(finalPrice(0.0875)(25.1));
// console.log(finalPrice(0.0875)(21.7));
// console.log(finalPrice(0.0875)(107.9));