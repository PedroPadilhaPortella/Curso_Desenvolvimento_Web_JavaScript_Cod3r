const[number] = [10]
console.log(number)

//destructuring em arrays
arr = [100, 10, 1, 0.1]
const [n1, n2, n3, n4, n5 = 0.01, n6] = arr
console.log(n1, n2, n3, n4, n5, n6)

//destructuring em arrays aninhados
const [, [, nota]] = [[6, 4], [2, 3, 4]]
console.log(nota)