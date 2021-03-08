function produto (arrayValores) {
    var total = 1;
    for (var i = 0; i < arrayValores.length; i++){
        total = total * arrayValores[i];
    }
    return total;
}

console.log(produto([3, 4, 5, 1, -1, -4])) //produto entre estes valores

console.log(produto([3, 4, 87, 45, 0])) //produto entre estes valores

console.log(produto([100, 10, -0.001, -10])) //produto entre estes valores